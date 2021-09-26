import { Injectable } from '@angular/core';

export type CartItem = {
  name?: string,
  price?: number,
  quantity?: number,
  url?: string
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];

  constructor() { }

  addItem(item: CartItem) {
    if (this.cart.some(cartitem => cartitem.name === item.name)) {
      let index = this.cart.findIndex(cartitem => cartitem.name === item.name);
      this.cart[index].quantity = this.cart[index].quantity! + item.quantity!;
    } else {
    this.cart.push(item);
    alert('Added product to cart!');
    };
  }

  getItems() {
    return this.cart;
  }

}
