import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, DatePipe, NgForOf, NgIf} from '@angular/common';
import {ClothDetailsComponent} from "./cloth-details.component";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [ClothDetailsComponent],
  exports: [
    ClothDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AsyncPipe,
    NgForOf,
    TableModule,
    NgIf,
    ButtonModule,
    DialogModule
  ]
})
export class ClothDetailsComponentModule { }
