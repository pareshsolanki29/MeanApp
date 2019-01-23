import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  name: string;
  mobile: string;

  password: string;
  gender: string;
  receivewnewsletters: boolean;
  isRegistered: boolean;

onRegisterClick() {
  try {
    const s = 'Email:' + this.email + 'Name:' + this.name + 'Mobile:' + this.mobile;
    console.log(s);
    if (localStorage.users == null || localStorage.users === undefined) {
       localStorage.users = JSON.stringify([]);
    }
    let u = JSON.parse(localStorage.users);
    u.push({email: this.email, name: this.name, mobile: this.mobile,
      password: this.password, receivenewsletters: this.receivewnewsletters, gender: this.gender,  });
      localStorage.users = JSON.stringify(u);
      console.log('registered');
      this.isRegistered = true;

  } catch (err) {
  this.isRegistered = false;
  }

}

  constructor() { }

  ngOnInit() {
  }

}
