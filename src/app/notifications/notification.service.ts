import { Injectable } from '@angular/core';
import { Notification } from './notification';
import { NotificationType } from './notification';
import { Task } from './task';
import { Reminder } from './reminder';
import { Questionnaire } from './questionnaire';

@Injectable()
export class NotificationService {
  notifications:Notification[];

  constructor() { 
  	this.notifications =[];
  }

  loadData(){
  	this.notifications.push(new Notification(NotificationType.TASK_ASSIGNED, new Task('Book Travel', 'Oliver Quiver')));
  	this.notifications.push(new Notification(NotificationType.TASK_ASSIGNED, new Task('Mobility Submit', 'Buck Owen')));
  	this.notifications.push(new Notification(NotificationType.TASK_ASSIGNED, new Task('Compile task', 'Buck Owen')));

    this.notifications.push(new Notification(NotificationType.QUESTIONNAIRE_COMPLETED, new Questionnaire("UX Designer Requistion", "Sarah Gutierrez")));

  	this.notifications.push(new Notification(NotificationType.REMINDER, new Reminder('Been has been on hold for 90 days', new Date(Date.parse("March 21, 2018")))));

  }
}
