import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireNotificationCardComponent } from './questionnaire-notification-card.component';

describe('QuestionaireNotificationCardComponent', () => {
  let component: QuestionnaireNotificationCardComponent;
  let fixture: ComponentFixture<QuestionnaireNotificationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireNotificationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireNotificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
