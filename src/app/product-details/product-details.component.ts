import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Providers} from "../providers";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  product: Product | undefined;
  protected providers: Observable<Providers[]>| undefined;


  constructor( private route: ActivatedRoute,
               private cartService: CartService,
               private http: HttpClient) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  getProviders() {
    return this.http.get<Providers[]>('/assets/providers.json')
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
    this.providers = this.getProviders();

  }
}
