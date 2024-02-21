import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { CartService } from '../cart.service';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductService} from "../product.service";
import {products} from "../products";
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
    private productService: ProductService,
  ) {}
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  onSubmit(): void {
    this.productService.setBroughtProducts( this.cartService.getItems());
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);

    this.checkoutForm.reset();
  }
}
