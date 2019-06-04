import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'chris';
  password = 'password';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

    ngOnInit() {
    }

    handleLogin() {
      console.log(this.username)
      // if(this.username==="chris" && this.password==="password") {
      if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      } else {
        this.invalidLogin = true;
      }
    }

  }
