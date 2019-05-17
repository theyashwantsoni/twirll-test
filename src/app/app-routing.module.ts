import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CityComponent} from './city/city.component';
import {CountryComponent} from'./country/country.component';
import {StateComponent} from './state/state.component';

const routes: Routes = [
  { path:'', redirectTo:'landing', pathMatch:'full'},
  { path: 'cities/:code/:id', component: CityComponent },
  { path: 'states/:code', component: StateComponent },
  { path: 'landing', component: CountryComponent },
  { path: '**', redirectTo:'landing' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
