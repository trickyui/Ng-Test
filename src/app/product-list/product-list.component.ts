import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private item: AuthService) { }
  products: any;
  filterText: any;
   ngOnInit() {
    this.products = this.item.products;
  }

}
