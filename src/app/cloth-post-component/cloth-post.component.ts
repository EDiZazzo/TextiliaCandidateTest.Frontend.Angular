import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClothService } from '../cloth-service/cloth.service';
import { Cloth } from '../model/cloth';
import { ClothRequest } from "../model/cloth-request";
import { MessageService } from "primeng/api";
import { DialogService} from "primeng/dynamicdialog";
import { ClothDetailsComponent } from "../cloth-details/cloth-details.component";
import {of} from "rxjs";

@Component({
  selector: 'app-post-cloth',
  templateUrl: './cloth-post.component.html',
  styleUrls: ['./cloth-post.component.css'],
  providers: [MessageService, DialogService, ClothService]
})
export class ClothPostComponent implements OnInit {
  clothForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clothService: ClothService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {
    this.clothForm = this.fb.group({
      name: ['', Validators.required],
      size: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.showSuccess()
  }

  protected async onSubmit(): Promise<void> {
    if (this.clothForm.valid) {
      const newCloth: ClothRequest = this.clothForm.value;
      try {
        const response = this.clothService.addNew(newCloth).subscribe(
          (cloth: Cloth) => {
            this.clothService.savedCloth.set(cloth);
            this.showClothDetailToast(cloth);
            this.showSuccess();
            this.clothService.emitClothAddedEvent(of(cloth))
            this.clothService.refreshClothes();
          },
          (error) => {
            console.error('Error adding cloth:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to save cloth.',
            });
        });
      } catch (error) {
        console.error('Error adding cloth:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to save cloth.',
        });
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please fill out all required fields.',
      });
    }
  }

  showSuccess() {
    this.messageService.clear();
    this.messageService.add(
         {severity:'success', summary: 'Success!', detail: 'Cloth saved Successfully'});
  }

  private showClothDetailToast(cloth: Cloth): void {
        if (cloth) {
          this.showSuccess();
          this.showClothDetailDialog();
        } else {
          console.error('Invalid cloth object:');
        }
  }

  private showClothDetailDialog(): void {
      console.log('Cloth object before opening dialog:', this.clothService.savedCloth());
      const ref = this.dialogService.open(ClothDetailsComponent, {
        data: {
          cloth: this.clothService.savedCloth() as Cloth
        },
        header: 'Cloth Details',
        width: '70%',
        contentStyle: { 'max-height': '500px', 'overflow': 'auto' }
      });

      ref.onClose.subscribe(() => {
        console.log('Dialog closed');
      });
    }
}
