import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _clothApiUrl = 'http://localhost:8080/api/clothing';

  get clothApiUrl(): string {
    return this._clothApiUrl;
  }

  set clothApiUrl(newApiUrl: string) {
    if (newApiUrl) {
      this._clothApiUrl = newApiUrl;
    }
  }

}
