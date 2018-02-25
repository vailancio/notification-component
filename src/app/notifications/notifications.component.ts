import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { NotificationCardComponent } from './notification-card/notification-card.component';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[];
  private _assignedTaskCount: number = 0;
  private _remindersCount: number = 0;
  private _generalNotificationsCount: number = 0;

  @Output() onAssignedTaskCountChange = new EventEmitter<number>();
  @Output() onReminderCountChange = new EventEmitter<number>();
  @Output() onGeneralNotificationCountChange = new EventEmitter<number>();

  constructor(private notificationService: NotificationService) { 

  }

  ngOnInit() {
  	this.notificationService.loadData();
  	this.notifications = this.notificationService.notifications;
  }

  onNotificationReceived(notification: Notification){
      this._assignedTaskCount++;
      this._remindersCount++;
      this._generalNotificationsCount++;

      this.onAssignedTaskCountChange.emit(this._assignedTaskCount);
      this.onReminderCountChange.emit(this._remindersCount);
      this.onGeneralNotificationCountChange.emit(this._generalNotificationsCount);
  }

}
