import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step20TakePhotoComponent } from './step20-take-photo.component';

describe('Step20TakePhotoComponent', () => {
  let component: Step20TakePhotoComponent;
  let fixture: ComponentFixture<Step20TakePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step20TakePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step20TakePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
