import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {}
