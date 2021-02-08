import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GeographicInfoService } from 'src/app/services/geographic-info/geographic-info.service';
import { InfoSaverService } from 'src/app/services/info-saver/info-saver.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
  
})
export class CitySearchComponent implements OnInit {

  title = 'Meteorologia';
  results: any[] = [];
  cookieResults: String = "";
  cookieList:any;
  @ViewChild('cityInput') cityInput!: ElementRef;

  constructor(
    private geographicInfoService: GeographicInfoService, private infoSaver: InfoSaverService, private router:Router, private cookieService: CookieService) {
    this.geographicInfoService = geographicInfoService;
    this.infoSaver = infoSaver;
    this.router = router;
  }

  onSearchButtonPressed(result?:any) {
    let city;
    if (result) {
      city = result;
    } else {
      city = this.cityInput.nativeElement.value;
    }
    
    this.cookieService.set('city', this.cookieResults.concat('^',city));
    this.geographicInfoService.getGeographicInfo(city).subscribe((response: any) => {
      console.log(response);
      this.results = response.geonames;
    });
  }

  onLinkCityPressed(result: any) {
    this.infoSaver.setLastCity(result);
    this.router.navigate(["details"]);
  }

  ngOnInit(): void {
    this.cookieResults = this.cookieService.get('city');
    this.cookieList = this.cookieResults.split('^');
    console.log(this.cookieList);
  }

}
