import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeographicInfoService {

  constructor(private http:HttpClient) {}

  url = "http://api.geonames.org/searchJSON?q=Madrid&maxRows=20&startRow=0&l";

   getGeographicInfo() {
      return this.http.get(this.url);
   }
}
