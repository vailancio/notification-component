import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeAgoPipe } from 'time-ago-pipe';
import { NotificationsModule } from './notifications/notifications.module';

import { AppComponent } from './app.component';

//import { NotificationService } from './notifications/notification.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationCardComponent } from './notifications/notification-card/notification-card.component';

import { TaskAssignedNotificationCardComponent } from './notifications/task-assigned-notification-card/task-assigned-notification-card.component';
import { QuestionnaireNotificationCardComponent } from './notifications/questionnaire-notification-card/questionnaire-notification-card.component';
import { ReminderNotificationCardComponent } from './notifications/reminder-notification-card/reminder-notification-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe,
    NotificationsComponent,
    NotificationCardComponent,
    TaskAssignedNotificationCardComponent,
    ReminderNotificationCardComponent,
    QuestionnaireNotificationCardComponent
  ],
  imports: [
    BrowserModule, 
    NotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
