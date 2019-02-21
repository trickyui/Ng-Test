import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  submitted = false;
  model: any = {};
  success = false;



  onSubmit(){
    this.submitted = true;
    
    
      this.success = true;
    
  }

  constructor(private router: Router,private auth1:AuthService) { }

  ngOnInit() {
    console.log(this.auth1.getData())
  }

}
