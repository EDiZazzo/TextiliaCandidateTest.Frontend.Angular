import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {RouterOutlet} from "@angular/router";
import {ClothGetComponentModule} from "./cloth-get-component/cloth-get.component.module";
import {ClothPostComponentModule} from "./cloth-post-component/cloth-post.component.module";
import {ClothDetailsComponentModule} from "./cloth-details/cloth-details.component.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClothPostComponentModule,
    ClothGetComponentModule,
    ClothDetailsComponentModule
  ],
  providers:[],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    }
  }
}
