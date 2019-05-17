import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CityComponent} from './city/city.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {CountryComponent} from './country/country.component';
import {StateComponent} from './state/state.component'
import { GeneralService } from './general.service';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    StateComponent,
    CountryComponent
  ],
  imports: [
    HttpClientModule,HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
