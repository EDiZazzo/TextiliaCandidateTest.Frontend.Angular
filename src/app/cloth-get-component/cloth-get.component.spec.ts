import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothGetComponent } from './cloth-get.component';

describe('ClothGetComponent', () => {
  let component: ClothGetComponent;
  let fixture: ComponentFixture<ClothGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothGetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
