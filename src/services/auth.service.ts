import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any = [
    {
      firstName: 'Vikash',
      lastName: 'Chauhan',
      email: 'v@gmail.com',
      mobile: 9560353234,
      gender: 'M',
      profession: 'Doctor',
      password: 'Password@123'
    },
    {
      firstName: 'Kartik',
      lastName: 'Gogia',
      email: 'g@gmail.com',
      mobile: 8285544964,
      gender: 'M',
      profession: 'Teacher',
      password: 'Password@345'
    }
  ]

  loginUser: any;

  isLoggedIn = false;

  setLogin(){
    this.isLoggedIn = true;
  }

  setLogout() {
    this.isLoggedIn = false;
  }

  getLogin(){
    return this.isLoggedIn;
  }

  setData(data) {
    this.users.push(data)
  }

  getData() {
    return this.users;
  }
  constructor() { }
}
