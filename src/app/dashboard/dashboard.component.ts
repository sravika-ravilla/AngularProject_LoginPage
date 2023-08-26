import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Data=[
    {language:'C',discover:'Dennis Ritchie'},
    {language:'C++',discover:'Bjarne Stroustrup'}
  ]
  constructor(private ts:TestService){

  }
  mobiles=this.ts.mobiles;
}
