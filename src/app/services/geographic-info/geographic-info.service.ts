import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class GeographicInfoService {

  constructor(private http: HttpClient) { }

  url = "http://api.geonames.org/search";

  q = "";

  maxRows = 20;

  startRow = 0;

  lang = "en";

  isNameRequired = true;

  style = "FULL";

  username = "demo"

  requestBody = {
    "filter": {
      "q": this.q,
      "maxRows": this.maxRows,
      "startRow": 0,
      "lang": this.lang,
      "isNameRequired": this.lang,
      "style": this.style
    },
    "columns": ["timezone", "bbox", "asciiName", "lat", "lng"]
  };


  getGeographicInfo() {
    return this.http.post(this.url, JSON.stringify(this.requestBody));
  }


}
