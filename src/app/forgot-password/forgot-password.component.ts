import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit() {
    this.newPasswordForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  get f() { return this.newPasswordForm.controls }
  
  onSubmit() {
    this.submitted = true;
    window.localStorage.setItem('password', this.newPasswordForm.value.newPassword)
  }
}
