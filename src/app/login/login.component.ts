import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = "LOGIN";
  EmailId :string='';
  Password:string='';

  login()
  {
    console.log('EmailId', this.EmailId);
    console.log('Password',this.Password)
  }
  path:string="../assets/th.jpg";
  

}
