import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ClothService } from './cloth-service/cloth.service';
import { SettingsService } from "./settings-service/settings.service";
import { ClothGetComponentModule } from "./cloth-get-component/cloth-get.component.module";
//import { ClothPostComponentModule } from "./cloth-post-component/cloth-post.component.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { DialogModule } from "primeng/dialog";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    TableModule,
    CardModule,
    ClothGetComponentModule,
    //ClothPostComponentModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppComponent,
    DialogModule,
    ToastModule,
    MessageModule,
    MessagesModule
  ],
  providers: [
    ClothService,
    SettingsService,
    MessageService
  ],
  bootstrap: []
})
export class AppModule { }
