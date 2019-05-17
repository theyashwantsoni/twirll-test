import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BehaviorSubject } from "rxjs";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
@Injectable()
export class GeneralService {

  constructor(private _http:HttpClient) { }


  getcountrydata(){
    return this._http.get<any[]>("http://testapi.twirll.com/twconfigs/getcountrylists.json?access_token=bc7f4c2017dbddf0436052fba44a944ec9035f9cf934e300704bbea6ed6b1c3d");
  }
  getstatelist(code){
    return this._http.get<any[]>(" http://testapi.twirll.com/twconfigs/getstatelists/"+code);
  }

  getcitylist(countrylist_id: string, state_code: string): Observable<any> {
    let headers1 = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    var body = `countrylist_id=${countrylist_id}&state_code=${state_code}`;
    var url = "http://testapi.twirll.com/twconfigs/getcitylist.json?access_token=bc7f4c2017dbddf0436052fba44a944ec9035f9cf934e300704bbea6ed6b1c3d";
    return this._http.post(url, body, { headers: headers1 }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
}
