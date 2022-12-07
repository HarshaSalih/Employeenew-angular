import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  constructor(private api:ApiService){}

  empcode=""
  searchData:any=[]

  readValues=()=>
  {
    let data={
      "empcode":this.empcode
  }
  console.log(data)
  this.api.searchEmployee(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("Invalid employee code")
        
      } else {
        this.searchData=response
        
      }
    }
  )
  }

}
