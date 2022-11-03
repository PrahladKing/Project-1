import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public forms !: FormGroup
  constructor(private build : FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.forms = this.build.group({
      fullName:[''],
      email:[''],
      password:[''],
      number:['']
    })
  }

  signUp() {
    this.http.post<any>('http://localhost:3000/UserList',this.forms.value)
    .subscribe(res=> {
      alert('SignUp Successful');
      this.forms.reset();
      this.route.navigate(['login'])
    },err=> {
      alert('Something went wrong')
    })
  }

}
