import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product-list/product-list.component';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';
import { quantities } from '../quantities';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input() product: Product = {};
  quantities: number[] = quantities;
  quantity: number = quantities[0];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addItem(name: string, price: number, quantity: number) {
    let cartitem = { name, price, quantity };
    this.cartService.addItem(cartitem);
  }

  onChange(quantity: number) {
    this.quantity = quantity;
  }

}
