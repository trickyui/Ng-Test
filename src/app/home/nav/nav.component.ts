import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  username: any;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.username = this.auth.loginUser;
    console.log(this.username);
  }

  logout() {
    this.auth.setLogout();
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }

}
