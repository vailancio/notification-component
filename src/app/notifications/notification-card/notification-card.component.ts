/* Breaking futher down into more sub components. This will be ususful in many cases like building component level caching and component specific cache invalidation logic
*/
import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../notification';
import { NotificationType } from '../notification';
import { TaskAssignedNotificationCardComponent} from '../task-assigned-notification-card/task-assigned-notification-card.component';
import { ReminderNotificationCardComponent} from '../reminder-notification-card/reminder-notification-card.component';
import { QuestionnaireNotificationCardComponent} from '../questionnaire-notification-card/questionnaire-notification-card.component';

@Component({
  selector: 'notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {
  @Input() notification: Notification;
  NotificationType = NotificationType;
  constructor() { 
 		
  }

  ngOnInit() {
  	//console.log(NotificationType.TASK_ASSIGNED);
  }

}
