<<<<<<< HEAD
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
=======
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
>>>>>>> cb7e59483c84a562a350137b312dd4d0d06d1ce7
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
  validLogin = false;
  constructor(public router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    const result = this.auth.users.find(data => {
      if ((this.f.username.value === data.email) && (this.f.password.value === data.password)) {
        return true;
      }
    });
    if (result) {
      this.auth.setLogin();
      this.auth.loginUser = result.firstName;
      this.router.navigate(['/home']);
    } else {
      this.validLogin = true;
    }
  }

}
