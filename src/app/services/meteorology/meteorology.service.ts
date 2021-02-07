import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteorologyService {

  constructor(private http: HttpClient) { }

  url = "http://api.geonames.org/weather";

  north = 0;

  south = 0;

  east = 0;

  west = 0;

  username = "demo"

  requestBody = {
    "filter": {
      "north": this.north,
      "south": this.south,
      "east": this.east,
      "west": this.west
    },
    "columns": ["temperature"]
  };


  getGeographicInfo() {
    return this.http.post(this.url, JSON.stringify(this.requestBody));
  }
}
