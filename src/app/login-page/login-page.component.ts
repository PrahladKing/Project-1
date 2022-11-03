import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../app.service";

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
    public forms !: FormGroup
    constructor(private build : FormBuilder, private service: AppService, private route:Router) {}
    ngOnInit(): void {
        this.forms = this.build.group({
            email:['',Validators.required],
            password:['',Validators.required]
        })
    }
    login() {
        this.service.getEmp()
        .subscribe(res=> {
          const users = res.find((a:any)=>{
            return  a.email == this.forms.value.email && a.password == this.forms.value.password
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