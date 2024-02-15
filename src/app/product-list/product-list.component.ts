import { Component , OnInit} from '@angular/core';
import { products } from '../products';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
}
