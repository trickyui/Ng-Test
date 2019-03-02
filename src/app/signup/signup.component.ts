import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  show = false;
  passwordRegEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  gender = [
    { key: 'Male', value: 'M' },
    { key: 'Female', value: 'F' },
    { key: 'Transgender', value: 'T' }
  ]

  constructor(private router: Router, private fb: FormBuilder, private data: AuthService) { }
  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[789][0-9]*')]],
      gender: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegEx)]],
      confirmPassword: ['', [Validators.required]],
      termsCondition: ['', [Validators.requiredTrue]]
    })
  }

  get f() { return this.signupForm.controls }
  onSubmit() {
    this.submitted = true;
    console.log(this.data.users)
    if (this.f.password != this.f.confirmPassword) {
      this.show = true;
    }

    if (!this.signupForm.invalid) {
      this.data.setData(this.signupForm.value);
      this.router.navigate(['/login']);
    }
  }


}
