export enum NotificationType { TASK_ASSIGNED, QUESTIONNAIRE_COMPLETED, REMINDER};
export class Notification {
	type:NotificationType; 
	resource:any;
	created_at: Date;

	constructor(type: NotificationType, resource:any){
		this.type = type;
		this.resource = resource;
		this.created_at = new Date();
	}
}
