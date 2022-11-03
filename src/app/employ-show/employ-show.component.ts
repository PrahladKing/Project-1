import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './employ-show.component.html',
  styleUrls: ['./employ-show.component.css']
})
export class EmployShowComponent implements OnInit {
  data: any;
  name:any;
  userList:any;
  nameList: any[] = [];
  dataSource = this.nameList;
  displayedColumns=['fullName','email','password','number','action']





  constructor(private http:HttpClient,private api:AppService,) { }

  ngOnInit(): void {
    this.showData()
  }
  showData(){
    this.http.get<any>("http://localhost:3000/UserList")
    .subscribe(res=>{
    this.userList=res
    for (var i=0;i<res.length;i++){
      this.nameList[i]=res[i]
      console.log(typeof(this.nameList))

    }
    this.dataSource = this.nameList;
    console.log(this.dataSource)

    })
  }

  deleteData(id:number){
    this.api.deleteEmp(id)
    .subscribe({
      next:(res)=>{
        alert('delete success')
        this.showData()

      },
      error:()=>{
         alert("Error while deleting record")
      }
    })
  }

}

