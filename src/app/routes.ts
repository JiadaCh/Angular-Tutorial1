import {ProductListComponent} from "./product-list/product-list.component";
import {Routes} from "@angular/router";
import {ProductDetailsComponent} from "./product-details/product-details.component";



export const routeConfig: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
  }];
