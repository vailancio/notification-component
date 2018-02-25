import { Component } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // private _todaysDate = new Date();
  // private _assignedTaskCount = 0;
  // private _reminderCount:number = 0;
  // private _notificationCount = 0;

  constructor(){
  	// this._assignedTaskCount = Task.count;
  	// this._reminderCount = Reminder.count;
  	// this._notificationCount = Notification.count;
  }
}
