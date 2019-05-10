import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'chris'
  password = 'password'
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username)
    if(this.username==="chris" && this.password==="password") {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
