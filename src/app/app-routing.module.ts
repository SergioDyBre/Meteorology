import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityHistoricalComponent } from './components/city-historical/city-historical.component';
import { CitySearchComponent } from './components/city-search/city-search.component';

const routes: Routes = [
  { path: 'search', component: CitySearchComponent },
  { path: 'historical', component: CityHistoricalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
