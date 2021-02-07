import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { CityHistoricalComponent } from './components/city-historical/city-historical.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    CityHistoricalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
