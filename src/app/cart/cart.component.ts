import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems: CartItem[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartitems = this.cartService.getItems();
  }

  addOne(productName: string) {
    this.cartService.addOne(productName);
  }

  rmoveOne(productName: string) {
    this.cartService.removeOne(productName);
  }

}
