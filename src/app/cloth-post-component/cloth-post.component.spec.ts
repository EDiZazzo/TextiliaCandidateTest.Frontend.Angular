import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothPostComponent } from './cloth-post.component';

describe('ClothPostComponentComponent', () => {
  let component: ClothPostComponent;
  let fixture: ComponentFixture<ClothPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
