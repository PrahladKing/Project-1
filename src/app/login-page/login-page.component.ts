import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
    public forms !: FormGroup
    constructor(private build : FormBuilder, private http: HttpClient, private route:Router) {}
    ngOnInit(): void {
        this.forms = this.build.group({
            email:['',Validators.required],
            password:['',Validators.required]
        })
    }
    login() {
        this.http.get<any>('http://localhost:3000/UserList')
        .subscribe(res=> {
          const users = res.find((a:any)=>{
            return  a.email === this.forms.value.email && a.password === this.forms.value.password
          });
          if(users) {
            alert('login success');
            this.forms.reset();
            this.route.navigate(['addProduct'])
          }
          else{
            alert('user not found')
          }
        },err=> {
            alert('Something went wrong')
        })
    }
}