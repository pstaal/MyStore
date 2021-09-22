import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../product-list/product-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {};

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let products = this.productService.getProducts();
    let id = this.route.snapshot.params['id'];
    this.product = products.find(product => product.id === id)!;
  }

}
