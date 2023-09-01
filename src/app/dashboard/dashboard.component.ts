import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashBoardComponent implements OnInit{
  Employees:any[]=[];
  constructor(private CustomerService:EmployeeService){}
  ngOnInit(){
    this.CustomerService.getEmpDetails().subscribe((data)=>{
      this.Employees=data;
  
    })
  }
}