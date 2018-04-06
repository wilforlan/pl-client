import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
// import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  url: any;
  _location: any;
  category_id: any;
  assets: any;
  temp: any;

  constructor(private _http: HttpClient) {

    this.url = 'http://api-v1.prideland.ng/api/';

  }

  getAssets(link) {
    const i = link.indexOf('?');
    link = link.substring(i);
    console.log(this.url + 'assets' + link);

    return this._http.get(this.url + 'assets' + link)
      .subscribe(resp => {
          console.log(resp);
      });
  }

  getSingleAsset(id) {
    return this._http.get(this.url + 'assets/' + id);
    // return this._http.get('assets/asset.json');
  }

  getData() {
    // return this._http.get('assets/assets.json');
    return this._http.get(this.url + 'assets');
  }

  getBoardTypes() {
    return this._http.get(this.url + 'assets/?type_id').subscribe(data => {
      this.temp = data;
      // console.log(this.temp);
    });
  }

}
