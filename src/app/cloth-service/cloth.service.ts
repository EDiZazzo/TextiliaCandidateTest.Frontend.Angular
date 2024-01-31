import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SettingsService } from '../settings-service/settings.service';
import { Cloth } from '../model/cloth';
import { ClothRequest } from "../model/cloth-request";

@Injectable({
  providedIn: 'root'
})
export class ClothService {
  private refreshClothesSubject = new Subject<void>();

  constructor(private http: HttpClient, private settingsService: SettingsService) {}

  getAll(): Observable<Cloth[]> {
    const apiUrl = this.settingsService.clothApiUrl;
    console.log('GET Request:', `${apiUrl}/getAll`);
    const listOfClothes = this.http.get<Cloth[]>(`${apiUrl}/getAll`);
    console.log('List of Clothes:', listOfClothes);
    return listOfClothes;
  }

  addNew(newCloth: ClothRequest): Observable<Cloth | any> {
    const apiUrl = this.settingsService.clothApiUrl;
    console.log('POST Request:', `${apiUrl}/add`);
    console.log('Request Body:', newCloth);

    return this.http.post<Cloth>(`${apiUrl}/add`, newCloth);
  }

  refreshClothes(): void {
    this.refreshClothesSubject.next();
  }

  getRefreshClothes(): Observable<void> {
    return this.refreshClothesSubject.asObservable();
  }
}
