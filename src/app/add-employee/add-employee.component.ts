import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empCode=""
  empName=""
  designation=""
  salary=""
  companyName=""
  mobile=""
  username=""
  password=""

  constructor(private api:ApiService) {}


  readValues=()=>
  {
    let data:any={"empCode":this.empCode,"empName":this.empName,"designation":this.designation,"salary":this.salary,"companyName":this.companyName,"mobile":this.mobile,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Employee added successfully")
          this.empCode=""
          this.empName=""
          this.designation=""
          this.salary=""
          this.companyName=""
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

