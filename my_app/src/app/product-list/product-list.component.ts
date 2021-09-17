import { Component, OnInit } from '@angular/core';
import * as data from '../../../data.json';

type Product = {
  id: number,
  name: string,
  price: number,
  url: string,
  description: string
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = data;
  }

}
