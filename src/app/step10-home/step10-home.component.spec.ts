import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step10HomeComponent } from './step10-home.component';

describe('Step10HomeComponent', () => {
  let component: Step10HomeComponent;
  let fixture: ComponentFixture<Step10HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step10HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step10HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
