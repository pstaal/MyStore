import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems: CartItem[] = [];
  totalPrice: number = 0;
  name: string = '';
  address: string = '';
  creditcard!: number

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartitems = this.cartService.getItems();
    this.totalPrice = this.cartService.calculateTotal();
  }

  addOne(productName: string) {
    this.cartService.addOne(productName);
    this.totalPrice = this.cartService.calculateTotal();
  }
  

  removeOne(productName: string) {
    this.cartService.removeOne(productName);
    this.totalPrice = this.cartService.calculateTotal();
  }
  
  submitForm() {
    let user = {
      name: this.name,
      address: this.address,
      creditcard: this.creditcard
    }
    this.cartService.addUser(user);
    this.router.navigate(['confirmation'])
  }

}
