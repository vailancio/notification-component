import { Component, OnInit, Input } from '@angular/core';
import { Reminder } from '../reminder';
import { Notification } from '../notification';

@Component({
  selector: 'reminder-notification-card',
  templateUrl: './reminder-notification-card.component.html',
  styleUrls: ['./reminder-notification-card.component.scss']
})
export class ReminderNotificationCardComponent implements OnInit {
	@Input() reminder:Reminder;
  	@Input() notification:Notification;
  	ngOnInit() {	
	}
}
