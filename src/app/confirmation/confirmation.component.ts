import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  name: string = '';
  totalPrice!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let { name, totalPrice } = this.cartService.getConformationDetails();
    this.name = name || '';
    this.totalPrice = totalPrice;
  }

}
