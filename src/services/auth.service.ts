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
  ];

  products = [
    { name: 'Shirt 1', color: 'red', img: '../assets/images/shirt.jpg', price: '700', populatiry: '1' },
    { name: 'Jeans 1', color: 'blue', img: '../assets/images/jeans.jpg', price: '800', populatiry: '2' },
    { name: 'Shirt 2', color: 'green', img: '../assets/images/shirt.jpg', price: '750', populatiry: '10' },
    { name: 'Shirt 3', color: 'yellow', img: '../assets/images/shirt.jpg', price: '650', populatiry: '7' },
    { name: 'Shirt 4', color: 'black', img: '../assets/images/shirt.jpg', price: '850', populatiry: '25' },
    { name: 'Shirt 5', color: 'orange', img: '../assets/images/shirt.jpg', price: '950', populatiry: '28' },
    { name: 'Shirt 6', color: 'pink', img: '../assets/images/shirt.jpg', price: '500', populatiry: '12' },
    { name: 'Shirt 7', color: 'brown', img: '../assets/images/shirt.jpg', price: '550', populatiry: '19' },
    { name: 'Shirt 8', color: 'purple', img: '../assets/images/shirt.jpg', price: '650', populatiry: '6' },
    { name: 'Jeans 2', color: 'red', img: '../assets/images/jeans.jpg', price: '780', populatiry: '8' },
    { name: 'Jeans 3', color: 'blue', img: '../assets/images/jeans.jpg', price: '700', populatiry: '22' },
    { name: 'Shirt 9', color: 'green', img: '../assets/images/shirt.jpg', price: '800', populatiry: '18' },
    { name: 'Shirt 10', color: 'yellow', img: '../assets/images/shirt.jpg', price: '750', populatiry: '17' },
    { name: 'Jeans 4', color: 'black', img: '../assets/images/jeans.jpg', price: '650', populatiry: '4' },
    { name: 'Jeans 5', color: 'orange', img: '../assets/images/jeans.jpg', price: '850', populatiry: '5' },
    { name: 'Shirt 11', color: 'pink', img: '../assets/images/shirt.jpg', price: '950', populatiry: '24' },
    { name: 'Jeans 6', color: 'brown', img: '../assets/images/jeans.jpg', price: '500', populatiry: '11' },
    { name: 'Shirt 12', color: 'purple', img: '../assets/images/shirt.jpg', price: '550', populatiry: '13' },
    { name: 'Jeans 7', color: 'red', img: '../assets/images/jeans.jpg', price: '650', populatiry: '9' },
    { name: 'Jeans 8', color: 'blue', img: '../assets/images/jeans.jpg', price: '780', populatiry: '3' }
  ];

  loginUser: any;

  isLoggedIn = false;

  setLogin() {
    this.isLoggedIn = true;
  }

  setLogout() {
    this.isLoggedIn = false;
  }

  getLogin() {
    return this.isLoggedIn;
  }

  setData(data) {
    this.users.push(data);
  }

  getData() {
    return this.users;
  }
  constructor() { }
}
