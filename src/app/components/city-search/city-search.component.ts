import { Component, OnInit } from '@angular/core';
import { GeographicInfoService } from 'src/app/services/geographic-info/geographic-info.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  cosa: any;

  constructor(private GeographicInfoService: GeographicInfoService) { }

  ngOnInit(): void {
    this.GeographicInfoService.getGeographicInfo().subscribe(response =>{      
      this.cosa = response;
      console.log(this.cosa);
     });
  }

}
