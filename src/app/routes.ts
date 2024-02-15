import {ProductListComponent} from "./product-list/product-list.component";
import {Routes} from "@angular/router";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";
import {ShippingComponent} from "./shipping/shipping.component";
import {ProviderListComponent} from "./provider-list/provider-list.component";
import {ProviderProductsComponent} from "./provider-products/provider-products.component";
import {ProviderDetailsComponent} from "./provider-details/provider-details.component";



export const routeConfig: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
  },
  {
    path: 'providers',
    component: ProviderListComponent,
    title: 'Providers'
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
  },
  {
    path: 'providers/:providersId/products',
    component: ProviderProductsComponent,
    title: 'Product details'
  },
  {
    path: 'providers/:providersId',
    component: ProviderDetailsComponent,
    title: 'Providers details'
  },
  {
    path: 'cart',
    component: CartComponent,
    title:'Cart'
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },];
