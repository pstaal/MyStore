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

  addOne(productName) {
    let index = this.cart.findIndex(cartitem => cartitem.name === productName);
    this.cart[index].quantity!++
  }

  removeOne(productName) {
    let index = this.cart.findIndex(cartitem => cartitem.name === productName);
    if (this.cart[index].quantity === 1) {
      this.cart.splice(index, 1);
      alert('Product removed from your cart!');
    } else {
      this.cart[index].quantity!--
    }
  }

  getItems() {
    return this.cart;
  }

}
