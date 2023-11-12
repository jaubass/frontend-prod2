import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDayComponent } from './new-day.component';

describe('NewDayComponent', () => {
  let component: NewDayComponent;
  let fixture: ComponentFixture<NewDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDayComponent]
    });
    fixture = TestBed.createComponent(NewDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
