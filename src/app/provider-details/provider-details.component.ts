import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Providers} from "../providers";

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './provider-details.component.html',
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent implements OnInit{
  protected providers: Observable<Providers[]>| undefined;
  protected providerIdFromRoute: number | undefined;

  constructor( private route: ActivatedRoute,
               private http: HttpClient) { }

  getProvider(){
      this.providers = this.http.get<{id:number,name: string, description: string}[]>('/assets/providers.json');

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.providerIdFromRoute = Number(routeParams.get('providersId'));
    this.getProvider();
    console.log(this.providers)
  }
}
