import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TimeAgoPipe } from 'time-ago-pipe';

import { NotificationService } from './notification.service';
// import { NotificationCardComponent } from './notification-card/notification-card.component';
// import { TaskAssignedNotificationCardComponent } from './task-assigned-notification-card/task-assigned-notification-card.component';
// import { QuestionnaireNotificationCardComponent } from './questionnaire-notification-card/questionnaire-notification-card.component';
// import { ReminderNotificationCardComponent } from './reminder-notification-card/reminder-notification-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
  	// TimeAgoPipe,
   //  NotificationCardComponent,
  	// TaskAssignedNotificationCardComponent,
   //  ReminderNotificationCardComponent,
   //  QuestionnaireNotificationCardComponent,
  ],
  providers: [NotificationService],
})
export class NotificationsModule { }