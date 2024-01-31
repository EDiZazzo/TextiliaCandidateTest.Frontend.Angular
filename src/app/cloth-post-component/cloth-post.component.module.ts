import { ClothPostComponent } from './cloth-post.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { ChipsModule } from "primeng/chips";
import {PanelModule} from "primeng/panel";
import {FieldsetModule} from "primeng/fieldset";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@NgModule({
    declarations: [ClothPostComponent],
  imports: [
    FormsModule,
    AsyncPipe,
    NgForOf,
    TableModule,
    NgIf,
    ButtonModule,
    DatePipe,
    ReactiveFormsModule,
    ChipsModule,
    PanelModule,
    FieldsetModule,
    InputTextModule,
    CardModule,
    DialogModule,
    ToastModule
  ],
    providers: [MessageService],
    exports: [
      ClothPostComponent
    ]
})
export class ClothPostComponentModule { }
