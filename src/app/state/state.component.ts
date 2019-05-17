import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import * as $ from 'jquery';
import {GeneralService} from "../general.service";
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  code : any;
  token : any;
  statelist: any;
  constructor(private route: ActivatedRoute,
    private router: Router,private _gen:GeneralService) { }

  ngOnInit(){
    this.code = this.route.snapshot.paramMap.get('code');
    this._gen.getstatelist(this.code).subscribe(data => {this.statelist = data;console.log(this.statelist);});
  }
 onSelectState(item){
  this.token="/cities/"+this.code+"/"+item;
  this.router.navigate([this.token]);
 }

}
