import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class GeographicInfoService {

  constructor(private http: HttpClient) { }

  url = "http://api.geonames.org/searchJSON";

  maxRows = 20;

  startRow = 0;

  lang = "en";

  isNameRequired = true;

  style = "FULL";

  username = "ilgeonamessample"



  getGeographicInfo(city:any) {
    return this.http.get(`${this.url}?q=${city}&maxRows=${this.maxRows}&startRow=${this.startRow}&lang=${this.lang}&isNameRequired=${this.isNameRequired}&style=${this.style}&username=${this.username}`);
  }


}
