import { Component, OnInit } from '@angular/core';
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
  constructor(private notificationService: NotificationService) { 

  }

  ngOnInit() {
  	this.notificationService.loadData();
  	this.notifications = this.notificationService.notifications;
  }

}
