export class Questionnaire {
	title:string;
	created_at:Date;
	//This could of User type but loading this amount of user data does not make sense when there only name to be display and not extra data like profile images.
	answered_by:string; 
	path:string;

	constructor(title:string, answered_by:string){
		this.title = title;
		this.answered_by = answered_by;
		this.created_at = new Date();
		// Proper path can ber given later
		this.path = '#';
	}
	
	static get count():number {
		return 56;
	}
}
