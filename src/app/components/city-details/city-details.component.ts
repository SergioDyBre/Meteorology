import { Component, OnInit,  AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { InfoSaverService } from 'src/app/services/info-saver/info-saver.service';
import { MeteorologyService } from 'src/app/services/meteorology/meteorology.service';

declare var ol: any;

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
  providers: [NgbProgressbarConfig]
})
export class CityDetailsComponent implements OnInit {

  city: any;

  cityMeteorology: any;

  temperature: any;

  map: any;

  constructor(private infoSaver: InfoSaverService, private meteorology: MeteorologyService, config: NgbProgressbarConfig, private router:Router) {
    this.infoSaver = infoSaver;
    this.meteorology = meteorology;
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.height = '20px';
  }

  ngOnInit(): void {


    this.city = this.infoSaver.getLastCity();
    this.getMeteorologyInfo();
    setInterval(() => {
      this.getMeteorologyInfo();
    }, 60000);
    this.initMap(this.city.lng, this.city.lat);
  }

  getMeteorologyInfo() {
    this.meteorology.getMeteorologyInfo(this.city.bbox.north, this.city.bbox.south, this.city.bbox.east, this.city.bbox.west).subscribe((response: any) => {
      console.log(response);
      this.cityMeteorology = response.weatherObservations;
      this.temperature = this.calculateTemperature() + 50;
    })
  }

  redirect() {
    this.router.navigate([""]);
  }
  
  calculateTemperature() {
    let mediaTemperature: any;
    let stationsCount: number = 0;
    this.cityMeteorology.forEach((data: any) => {
      mediaTemperature = ++data.temperature;
      stationsCount++;
    });
    return mediaTemperature / stationsCount;
  }

  initMap(long:any, lat:any) {

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([Number(long), Number(lat)]),
        zoom: 12
      })
    });
  }
}
