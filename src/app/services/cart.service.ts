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
  totalPrice: number = 0;

  constructor() { }

  addItem(item: CartItem) {
    if (this.cart.some(cartitem => cartitem.name === item.name)) {
      let index = this.cart.findIndex(cartitem => cartitem.name === item.name);
      this.cart[index].quantity = this.cart[index].quantity! + item.quantity!;
    } else {
    this.cart.push(item);
    alert('Added product to your cart!');
    };
  }

  addOne(productName: string) {
    let index = this.cart.findIndex(cartitem => cartitem.name === productName);
    this.cart[index].quantity!++
  }

  removeOne(productName: string) {
    let index = this.cart.findIndex(cartitem => cartitem.name === productName);
    if (this.cart[index].quantity === 1) {
      this.cart.splice(index, 1);
      alert('Removed product from your cart!');
    } else {
      this.cart[index].quantity!--
    }
  }

  getItems() {
    return this.cart;
  }

  calculateTotal() {
    this.totalPrice = this.cart.reduce((sum, current) => {
      return sum + (current.price! * current.quantity!)
    }, 0);
    return this.totalPrice;
  }

}
