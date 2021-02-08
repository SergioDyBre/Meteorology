import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoSaverService {

  lastCityRecord:any;

  getLastCity() {
    return this.lastCityRecord;
  }

  setLastCity(city:any) {
    this.lastCityRecord = city;
    
  }
  constructor() { }
}
