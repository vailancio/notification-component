import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../notification';
import { Questionnaire } from '../questionnaire';

@Component({
  selector: 'questionnaire-notification-card',
  templateUrl: './questionnaire-notification-card.component.html',
  styleUrls: ['./questionnaire-notification-card.component.scss']
})
export class QuestionnaireNotificationCardComponent implements OnInit {
	  @Input() questionnaire: Questionnaire;
  	@Input() notification: Notification;
  
  // constructor(questionnaire: Questionnaire, notification: Notification) { 
  // 	this.questionnaire = questionnaire;
  // 	this.notification = notification;
  // }
  
  ngOnInit() {
  }

}
