import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBarComponent,
    HttpClientModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
