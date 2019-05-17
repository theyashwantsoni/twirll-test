import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from "rxjs/operators";
import * as $ from 'jquery';
import {GeneralService} from "../general.service";
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countrydata : any;
  token : any;
  constructor(private _router:Router, private _gen:GeneralService) { }

  ngOnInit() {
    

  }
  getcountrylist(){
      this._gen.getcountrydata().subscribe(data => {this.countrydata = data,console.log(this.countrydata)});
      document.getElementById('projects').scrollIntoView();

  }
  onSelect(item){
    this.token="/states/"+item;
    this._router.navigate([this.token]);
  }
}
