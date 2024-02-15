import { Component ,OnInit} from '@angular/core';
import { products } from '../products';
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Providers} from "../providers";

@Component({
  selector: 'app-provider-products',
  templateUrl: './provider-products.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  styleUrls: ['./provider-products.component.css']
})

export class ProviderProductsComponent implements OnInit{
  protected providers: Observable<Providers[]>| undefined;
  products = [...products];
  protected providerIdFromRoute: number | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  getProduct( id:number) {
    return this.products.filter(value => value.providerId === id);
  }

  getProviders() {
    return this.http.get<{id:number,name: string, description: string}[]>('/assets/providers.json');
  }

  ngOnInit(): void {
    this.providers =  this.getProviders();

    const routeParams = this.route.snapshot.paramMap;
    this.providerIdFromRoute = Number(routeParams.get('providersId'));
    this.products = this.getProduct(this.providerIdFromRoute)
  }
}
