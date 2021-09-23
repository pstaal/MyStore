import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product-list/product-list.component';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input() product: Product
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addItem() {
    
   }

}
