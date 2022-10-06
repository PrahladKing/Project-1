import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private _data: AppService) { }
  countries : any = [];
  errMsg: any;
  isActive = false;
  isActivate = false;
  msg = sessionStorage.getItem('user')
  ngOnInit(){
    switch (this.msg) {
      case "root":
        this.isActive = true
        this.isActivate = true
        break;
      case 'super':
        this.isActive = true
        break
      default:
        break;
    }
  this._data.sendData().subscribe(data => this.countries = data, error => this.errMsg = error)
    // this.countries = this._data.sendData()
  }

}
