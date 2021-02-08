import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteorologyService {

  constructor(private http: HttpClient) { }

  url = "http://api.geonames.org/weatherJSON";

  username = "ilgeonamessample"

  getMeteorologyInfo(north:any, south:any, east:any, west:any) {
    return this.http.get(`${this.url}?north=${44.1}&south=${9.9}&east=${22.4}&west=${55.2}&username=${this.username}`);
  }
}
