import {effect, Injectable, signal, WritableSignal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import { SettingsService } from '../settings-service/settings.service';
import { Cloth } from '../model/cloth';
import { ClothRequest } from "../model/cloth-request";

@Injectable({
  providedIn: 'root'
})
export class ClothService {
  private refreshClothesSubject = new Subject<void>();
  private clothAddedSubject = new Subject<Observable<Cloth>>();

  savedCloth: WritableSignal<Cloth | null> = signal(null);

  emitClothAddedEvent(cloth: Observable<Cloth>) {
    console.log('Event added');
    this.clothAddedSubject.next(cloth);
  }

  getSavedClothSignal(): Observable<Cloth | null> {
    return of(this.savedCloth()) as Observable<Cloth | null>;
  }

  constructor(private http: HttpClient, private settingsService: SettingsService) {
    effect(() => {
      console.log(`The name of savedCloth is: ${this.savedCloth()?.name}`);
    });
  }

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

  getRefreshClothes(): Observable<void> {
    return this.refreshClothesSubject.asObservable();
  }
}
