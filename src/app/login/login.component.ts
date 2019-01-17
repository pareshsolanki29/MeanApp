import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 email: string;
 password: string;
 message: string;

 constructor() { }

  onLoginClick() {
  if (this.email === 'admin@email.com' && this.password === 'manager' ) {
    this.message = 'Successful Login';
   } else {
    this.message = 'unSuccessful Login';
   }
}

ngOnInit() {
  }

}
