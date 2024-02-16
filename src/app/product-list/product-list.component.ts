import { Component , OnInit} from '@angular/core';
import { products } from '../products';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductAlertsComponent} from "../product-alerts/product-alerts.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductAlertsComponent
  ],
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
