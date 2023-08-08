import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  constructor(private router:Router)
  {

  }
  login()
  {
    this.router.navigate(['/login']);
  }
  dashboard()
  {
    this.router.navigate(['/dashboard']);
  }
}
