import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empcode=""
  empname=""
  designation=""
  salary=""
  companyname=""
  mobile=""
  username=""
  password=""

  constructor(private api:ApiService) {}


  readValues=()=>
  {
    let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"companyname":this.companyname,"mobile":this.mobile,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Employee added successfully")
          this.empcode=""
          this.empname=""
          this.designation=""
          this.salary=""
          this.companyname=""
          this.mobile=""
          this.username=""
          this.password=""
        }
        else{
          alert("Something went wrong")
        }
      }
    )
  }

}

