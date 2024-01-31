import { Component, OnInit } from '@angular/core';
import { Cloth } from '../model/cloth';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import {ClothService} from "../cloth-service/cloth.service";
import {of} from "rxjs";

@Component({
  selector: 'app-cloth-details',
  templateUrl: './cloth-details.component.html'
})
export class ClothDetailsComponent implements OnInit {
  cloth!: Cloth;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public clothService: ClothService) {}

  ngOnInit() {
    this.cloth = this.config.data.cloth;
  }

  onClose(): void {
    this.ref.close();
    this.clothService.emitClothAddedEvent(of(this.cloth));
  }
}
