import { Injectable } from '@angular/core';

export type CartItem = {
  name?: string,
  price?: number,
  quantity?: number
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
      let object = this.cart.find(cartitem => cartitem.name === item.name)!;
      this.cart.splice(index,1);
      object.quantity = object.quantity! + item.quantity!;
      this.cart.push(object);
      alert('Added product to cart!')
    } else {
    this.cart.push(item);
    alert('Added product to cart!')
    console.log(this.cart);
    };
  }

  getItems() {
    return this.cart;
  }

}
