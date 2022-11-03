import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public forms !: FormGroup
  constructor(private build : FormBuilder, private service: AppService, private route: Router) { }

  ngOnInit(): void {
    this.forms = this.build.group({
      fullName:[''],
      email:[''],
      password:[''],
      number:['']
    })
  }

  signUp() {
    this.service.postEmp(this.forms.value)
    .subscribe({
      next:(res) => {
        alert('SignUp success');
        this.forms.reset();
        this.route.navigate(['login'])
      },
      error:()=>{
          alert("submit failed check error")
      }
    })
  }

}

