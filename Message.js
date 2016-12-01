module.exports = Message(message,author,date){
	if(date){
		this.date = date;
	} else {
		this.date = new Date();
	}
	this.author = author;
	this.message = message;
}