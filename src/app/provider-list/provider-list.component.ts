import { Component ,OnInit} from '@angular/core';
import { products } from '../products';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Providers} from "../providers";

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  styleUrls: ['./provider-list.component.css']
})

export class ProviderListComponent implements OnInit{
  protected providers: Observable<Providers[]>| undefined;

  constructor(
    private http: HttpClient
  ) {}


  getProviders() {
    return this.http.get<{id:number,name: string, description: string}[]>('/assets/providers.json');
  }

  ngOnInit(): void {
    this.providers =  this.getProviders();
  }
}
