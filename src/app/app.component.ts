import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TopBarComponent} from "./top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBarComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
