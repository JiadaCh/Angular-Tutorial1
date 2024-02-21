
import { Product } from './products';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: Product[] = [];
  constructor(
  ) {
    this.getBoughtProducts()}



  setBroughtProducts(product:Product[]) {
    let products = localStorage.getItem("products");
    if (products!=null && product.length != 0){
      console.log(product)
      let str = JSON.stringify(product);
      products=products.slice(0,products.length-1);
      str= str.slice(1,str.length-1);
      localStorage.setItem("products",`${products},${str}]`)
    } else if (product.length != 0){

      localStorage.setItem("products",`${JSON.stringify(product)}`)
    }
  }
  getBoughtProducts() {
    let products = localStorage.getItem("products");
    if (products!=null)
    this.items = JSON.parse(products);
    else
      this.items = []
  }

  getItems() {
    return this.items;
  }


}
