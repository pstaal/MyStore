import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../product-list/product-list.component';
import { ActivatedRoute } from '@angular/router';
import { quantities } from '../quantities';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {};
  quantities: number[] = quantities;
  quantity: number = quantities[0];

  constructor(private productService: ProductsService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    let products = this.productService.getProducts();
    let id = parseInt(this.route.snapshot.params['id']);
    this.product = products.find(product => product.id === id)!;
  }

  addItem(name: string, price: number, quantity: number) {
    let cartitem = { name, price, quantity };
    this.cartService.addItem(cartitem);
  }

  onChange(quantity: number) {
    this.quantity = quantity;
  }

}
