import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { CartService } from '../cart.service';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
