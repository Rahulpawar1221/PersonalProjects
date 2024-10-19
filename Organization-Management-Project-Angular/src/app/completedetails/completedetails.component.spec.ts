import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedetailsComponent } from './completedetails.component';

describe('CompletedetailsComponent', () => {
  let component: CompletedetailsComponent;
  let fixture: ComponentFixture<CompletedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedetailsComponent]
    });
    fixture = TestBed.createComponent(CompletedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
