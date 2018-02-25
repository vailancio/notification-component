export class Reminder {
	text:string;
	created_at:Date;
	remind_at:Date;

	constructor(text: string, remind_at: Date){
		this.text = text;
		this.remind_at = remind_at;
	}
}
