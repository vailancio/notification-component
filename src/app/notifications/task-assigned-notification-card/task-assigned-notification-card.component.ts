import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { Notification } from '../notification';

@Component({
  selector: 'task-assigned-notification-card',
  templateUrl: './task-assigned-notification-card.component.html',
  styleUrls: ['./task-assigned-notification-card.component.scss']
})
export class TaskAssignedNotificationCardComponent implements OnInit {
  @Input() notification:Notification;
  @Input() task:Task;
  ngOnInit() {	
  }
}
