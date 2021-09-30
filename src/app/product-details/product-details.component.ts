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
    let products : Product[] = [];
    this.productService.getProducts().subscribe((data: Product[]) => {
    products = data;
    let id = parseInt(this.route.snapshot.params['id']);
    this.product = products.find(p => { return p.id === id})!;
    });;
  }


  addItem(name: string, price: number, quantity: number, url: string) {
    let cartitem = { name, price, quantity, url };
    this.cartService.addItem(cartitem);
  }

  onChange(quantity: number) {
    this.quantity = quantity;
  }

}
