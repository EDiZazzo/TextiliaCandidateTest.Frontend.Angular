import {Component, computed, effect, OnInit, signal, Signal, untracked} from '@angular/core';
import { ClothService } from '../cloth-service/cloth.service';
import { Cloth } from '../model/cloth';
import {Observable, of, tap} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-get-cloth',
  templateUrl: './cloth-get.component.html',
  styleUrls: ['./cloth-get.component.css'],
  providers: [DatePipe],
})
export class ClothGetComponent implements OnInit {
  clothes$: Observable<Cloth[]> | null = of([]);
  loading: boolean = false;
  counter= signal(0);

  constructor(public clothService: ClothService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.clothes$ = null;
    this.loadClothes();

    effect(() => {
      this.loadClothes();
      console.log("effect triggered");
      return this.clothService.savedCloth;
    });

    this.clothService.getSavedClothSignal().subscribe(() => {
      this.loadClothes();
    });

    this.clothService.getRefreshClothes().subscribe(() => {
      this.loadClothes();
    });
  }

  public loadClothes(): void {
    this.loading = true;
    this.clothes$ = this.clothService.getAll().pipe(
      catchError((error) => {
        console.error('Error loading clothes:', error);
        return of([] as Cloth[]);
      }),
      map((clothes) => {
        this.loading = false;
        return clothes || [];
      })
    );
  }
}
