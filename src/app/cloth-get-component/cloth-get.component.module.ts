import { ClothGetComponent } from './cloth-get.component';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import {DialogService} from "primeng/dynamicdialog";
import {DialogModule} from "primeng/dialog";

@NgModule({
    declarations: [ClothGetComponent],
  imports: [
    FormsModule,
    AsyncPipe,
    NgForOf,
    TableModule,
    NgIf,
    ButtonModule,
    DatePipe,
    DialogModule
  ],
    providers: [
      DialogService],
    exports: [
        ClothGetComponent
    ]
})
export class ClothGetComponentModule { }
