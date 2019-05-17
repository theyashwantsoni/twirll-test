import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import * as $ from 'jquery';
import {GeneralService} from "../general.service";
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  code : any;
  token : any;
  citylist: any;
  id:any;
  constructor(private route: ActivatedRoute,
    private router: Router,private _gen:GeneralService) { }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this.id = this.route.snapshot.paramMap.get('id');
    this._gen.getcitylist(this.code,this.id).subscribe(data => {this.citylist = data;console.log(this.citylist);});

  }

}
