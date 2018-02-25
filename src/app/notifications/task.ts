export class Task {
	title:string;
	created_at:Date;
	//This could of User type but loading this amount of user data does not make sense when there only name to be display and not extra data like profile images.
	created_by:string; 
	path:string;

	constructor(title:string, created_by:string){
		this.title = title;
		this.created_by = created_by;
		this.created_at = new Date();
		// Proper path can ber given later
		this.path = '#';
	}
	static get count():number {
		return 56;
	}
}
