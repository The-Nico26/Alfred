function Message(message,date){
	if(date){
		this.date = date;
	} else {
		this.date = new Date();
	}
	this.message = message;
}

$(function(){
	$mField = $("#messageField");
	$mForm = $("#messageForm");
	var socket = io();
	$mField.focus();
	console.info("Socket connected and Jquery loaded");

	$mForm.on('submit',function(e){
		e.preventDefault();
		onMessageSubmit($mField.val());
		$mField.val("");
	})

	function onMessageSubmit(messageText){
		console.log(new Message(messageText));
	}
})