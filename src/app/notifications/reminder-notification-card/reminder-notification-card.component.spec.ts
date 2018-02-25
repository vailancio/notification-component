import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderNotificationCardComponent } from './reminder-notification-card.component';

describe('ReminderNotificationCardComponent', () => {
  let component: ReminderNotificationCardComponent;
  let fixture: ComponentFixture<ReminderNotificationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderNotificationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderNotificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
