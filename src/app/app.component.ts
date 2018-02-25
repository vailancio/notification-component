import { Component } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _todaysDate = new Date();
  private _assignedTaskCount = 0;
  private _reminderCount:number = 0;
  private _notificationCount = 0;

  constructor(){
  	
  }

  onAssignedTaskCountChange(count: number){
     this._assignedTaskCount = count;
  }

  onReminderCountChange(count: number){
     this._reminderCount = count;
  }

  onGeneralNotificationCountChange(count: number){
     this._notificationCount = count;
  }

}
