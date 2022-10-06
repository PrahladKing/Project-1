import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _userData: AppService) { }
  userID = ''
  pass = ''
  link = ''
  userData : any = []
  checkData() {
    for(let x of this.userData) {
      if(this.userID == x.mail && this.pass == x.password) {
        this.link = '/list'
        sessionStorage.setItem('user', x.user)
      }
    }
  }
  ngOnInit() {
    this.userData = this._userData.checkMail()
  }

}
