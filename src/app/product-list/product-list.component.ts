import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartItem } from '../services/cart.service';
import { CartService } from '../services/cart.service';


export type Product = {
  id?: number,
  name?: string,
  price?: number,
  url?: string,
  description?: string
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
  });;
  }

  addedProduct(event: CartItem){
    this.cartService.addItem(event);
  }

}
