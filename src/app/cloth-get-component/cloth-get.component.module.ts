import { ClothGetComponent } from './cloth-get.component';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";

@NgModule({
    declarations: [ClothGetComponent],
  imports: [
    FormsModule,
    AsyncPipe,
    NgForOf,
    TableModule,
    NgIf,
    ButtonModule,
    DatePipe
  ],
    providers: [],
    exports: [
        ClothGetComponent
    ]
})
export class ClothGetComponentModule { }
