import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAvailabilityComponent } from './slot-availability.component';

describe('SlotAvailabilityComponent', () => {
  let component: SlotAvailabilityComponent;
  let fixture: ComponentFixture<SlotAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlotAvailabilityComponent]
    });
    fixture = TestBed.createComponent(SlotAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
