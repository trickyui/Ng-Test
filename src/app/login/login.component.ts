import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  username: any;
  password: any;
  validLogin = false;
  constructor(public router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get f() { return this.loginForm.controls }

  onSubmit() {
    this.submitted = true;
    let email = this.f.username.value;
    let password = this.f.password.value
    let result = this.auth.users.find(data => {
      if (data.email === email && data.password === password) {
        return true
      }
    })
    if (result) {
      this.auth.setLogin();
      this.auth.loginUser = result.firstName
      this.router.navigate(['/home'])
    } else {
      this.validLogin = true;
    }
  }

}
