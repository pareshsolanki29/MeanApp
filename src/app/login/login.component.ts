import { Component, OnInit } from '@angular/core';
import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';


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
  if (this.checkUser(this.email, this.password) === true ) {
    this.message = 'Successful Login';
   } else {
    this.message = 'unSuccessful Login';
   }
}

private checkUser (email: string, password: string): boolean {
  let u = JSON.parse(localStorage.users);
  // tslint:disable-next-line:forin
  for(let i in u){
   var found = false;
    if ( u[i].email === email && u[i].password === password) {
     found = true;
    }
  }
return found;
}


ngOnInit() {
  }

}
