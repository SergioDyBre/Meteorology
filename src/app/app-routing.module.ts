import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { CitySearchComponent } from './components/city-search/city-search.component';


const routes: Routes = [
  { path: '', component: CitySearchComponent },

  { path: 'details', component: CityDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
