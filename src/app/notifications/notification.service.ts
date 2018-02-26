import { Injectable } from '@angular/core';
import { QueueingSubject } from 'queueing-subject'
import { Observable } from 'rxjs/Observable'
import websocketConnect from 'rxjs-websockets'
import 'rxjs/add/operator/share'
import { Notification } from './notification';
import { NotificationType } from './notification';
import { Task } from './task';
import { Reminder } from './reminder';
import { Questionnaire } from './questionnaire';

@Injectable()
export class NotificationService {
  notifications: Notification[];
  private inputStream: QueueingSubject<string>
  public messages: Observable<string>

  constructor(){
    this.notifications = [];
  }
  // connect() {
  //   if (this.messages)
  //     return
 
  //   // Using share() causes a single websocket to be created when the first
  //   // observer subscribes. This socket is shared with subsequent observers
  //   // and closed when the observer count falls to zero.
  //   this.messages = websocketConnect(
  //     'ws://127.0.0.1:8999',
  //     this.inputStream = new QueueingSubject<string>()
  //   ).messages.share()
  // }


  loadData(){
  	this.notifications.push(new Notification(NotificationType.TASK_ASSIGNED, new Task('Book Travel', 'Oliver Quiver')));
  	this.notifications.push(new Notification(NotificationType.TASK_ASSIGNED, new Task('Mobility Submit', 'Buck Owen')));
  	this.notifications.push(new Notification(NotificationType.TASK_ASSIGNED, new Task('Compile task', 'Buck Owen')));

    this.notifications.push(new Notification(NotificationType.QUESTIONNAIRE_COMPLETED, new Questionnaire("UX Designer Requistion", "Sarah Gutierrez")));

  	this.notifications.push(new Notification(NotificationType.REMINDER, new Reminder('Been has been on hold for 90 days', new Date(Date.parse("March 21, 2018")))));

  }
}
