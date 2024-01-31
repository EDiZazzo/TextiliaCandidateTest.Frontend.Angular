import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ClothService } from '../cloth-service/cloth.service';
import { Cloth } from '../model/cloth';
import { Observable } from "rxjs";
import { ClothRequest } from "../model/cloth-request";
import { MessageService } from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-post-cloth',
  templateUrl: './cloth-post.component.html',
  styleUrls: ['./cloth-post.component.css'],
  standalone: true,
  imports: [
    ToastModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    RippleModule
  ],
  providers: [MessageService]
})
export class ClothPostComponent {
  clothForm: FormGroup;

  savedCloth$: Cloth = {
    name: '',
    size: '',
    color: '',
    createdTimestamp: new Date(),
    updatedTimestamp: new Date()
  }
  showDialog = false;


  constructor(
    private fb: FormBuilder,
    private clothService: ClothService,
    private messageService: MessageService
  ) {
    this.clothForm = this.fb.group({
      name: ['', Validators.required],
      size: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  protected async onSubmit(): Promise<void> {
    if (this.clothForm.valid) {
      const newCloth: ClothRequest = this.clothForm.value;
      try {
        const response = await this.clothService.addNew(newCloth);
        this.showClothDetailDialog(response);
        this.showSuccess();
        this.clothService.refreshClothes();
      } catch (error) {
        console.error('Error adding cloth:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to save cloth.'
        });
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please fill out all required fields.'
      });
    }
  }

  showSuccess() {
    this.messageService.clear();
    this.messageService.addAll([{
      severity: 'success',
      key: this.savedCloth$.name,
      sticky: true,
      id: 'success',
      summary: 'Success!',
      detail: 'greeevee'}]);
    this.messageService.add(
         {severity:'success', summary: 'Success!', detail:'The save was successful.'}
        );
  }

  private showClothDetailDialog(cloth$: Observable<Cloth>): void {
    cloth$.subscribe(
      (cloth) => {
        if (cloth) {
          this.savedCloth$ = {
            name: cloth.name,
            size: cloth.size,
            color: cloth.color,
            createdTimestamp: cloth.createdTimestamp,
            updatedTimestamp: cloth.updatedTimestamp
          };
          this.showDialog = true;
        } else {
          console.error('Invalid cloth object:');
        }
      },
      (error) => {
        console.error('Error retrieving cloth details:', error);
      }
    );
  }
  show() {
    this.messageService.addAll([
      { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { severity: 'warn', summary: 'Message 3', detail: 'Message Content' }
    ]);
  }
}
