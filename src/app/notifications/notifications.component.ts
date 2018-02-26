import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { NotificationType } from './notification';
import { NotificationCardComponent } from './notification-card/notification-card.component';

import { Task } from './task';
import { Questionnaire } from './questionnaire';
import { Reminder } from './reminder';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[];

  // private socketSubscription: Subscription;
  private _assignedTaskCount: number = 0;
  private _remindersCount: number = 0;
  private _generalNotificationsCount: number = 0;

  @Output() onAssignedTaskCountChange = new EventEmitter<number>();
  @Output() onReminderCountChange = new EventEmitter<number>();
  @Output() onGeneralNotificationCountChange = new EventEmitter<number>();

  constructor(private notificationService: NotificationService) { 
      this.notifications = [];
  }

  ngOnInit() {
  	this.notificationService.loadData();
  	this.notifications = this.notificationService.notifications;

    // this.notificationService.connect()
 
    // this.socketSubscription = this.notificationService.messages.subscribe((message: string) => {
    //   console.log('Received notification from server: ', JSON.parse(message));
    //   let t = JSON.parse(message);

    //   if(t.type = "TASK_ASSIGNED"){
    //     console.log(t.resource.title, t.assigned_by);
    //     this.notifications.push(new Notification(NotificationType.TASK_ASSIGNED, new Task(t.resource.title, t.assigned_by)));
    //   }

      // if(message.type = "TASK_ASSIGNED"){
          
      // }
    //});

   
    //Mocking websocket data
    let  i = 0;
    let scope = this;
    let timer = setInterval(function(){
        i++;
        scope.mockNotifications();
        if(i > 100){
          clearInterval(timer);
        }
    }, 3000);
  }

  onNotificationReceived(notification: Notification){

      if(notification.type == NotificationType.TASK_ASSIGNED){
        this._assignedTaskCount++;
        this.onAssignedTaskCountChange.emit(this._assignedTaskCount);
      }

      if(notification.type == NotificationType.REMINDER){
        this._remindersCount++;
        this.onReminderCountChange.emit(this._remindersCount);
      }

      if(notification.type == NotificationType.QUESTIONNAIRE_COMPLETED){
        this._generalNotificationsCount++;
        this.onGeneralNotificationCountChange.emit(this._generalNotificationsCount);
      }
      
  }

  // ngOnDestroy() {
  //   this.socketSubscription.unsubscribe()
  // }

  private mockNotifications(){
        let notification; 
        let RAND = Math.floor(Math.random() * 3);

        switch (RAND) {
          case 0:
            notification = new Notification(NotificationType.TASK_ASSIGNED, new Task('Book Travel', 'Oliver Quiver'));
            break;
          case 1:
            notification = new Notification(NotificationType.QUESTIONNAIRE_COMPLETED, new Questionnaire("UX Designer Requistion", "Sarah Gutierrez"));
            break;
          default:
            notification = new Notification(NotificationType.REMINDER, new Reminder('Been has been on hold for 90 days', new Date(Date.parse("March 21, 2018"))));
            break;
        }

        // console.log(this.notifications);
        this.notifications.push(notification);
        this.onNotificationReceived(notification);
  }


}
