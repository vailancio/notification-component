import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { NotificationType } from './notification';
import { NotificationCardComponent } from './notification-card/notification-card.component';

import { Task } from './task';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[];

  private socketSubscription: Subscription;
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
  	// this.notificationService.loadData();
  	// this.notifications = this.notificationService.notifications;

    this.notificationService.connect()
 
    this.socketSubscription = this.notificationService.messages.subscribe((message: string) => {
      console.log('Received notification from server: ', JSON.parse(message));
      let t = JSON.parse(message);

      if(t.type = "TASK_ASSIGNED"){
        console.log(t.resource.title, t.assigned_by);
        this.notifications.push(new Notification(NotificationType.TASK_ASSIGNED, new Task(t.resource.title, t.assigned_by)));
      }

      // if(message.type = "TASK_ASSIGNED"){
          
      // }
    });
  }

  onNotificationReceived(notification: Notification){
      this._assignedTaskCount++;
      this._remindersCount++;
      this._generalNotificationsCount++;

      this.onAssignedTaskCountChange.emit(this._assignedTaskCount);
      this.onReminderCountChange.emit(this._remindersCount);
      this.onGeneralNotificationCountChange.emit(this._generalNotificationsCount);
  }

  ngOnDestroy() {
    this.socketSubscription.unsubscribe()
  }

}
