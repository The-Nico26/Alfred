function Message(message,author,date){
	if(date){
		this.date = date;
	} else {
		this.date = new Date();
	}
	this.author = author;
	this.message = message;
}

$(function(){
	var agent = null;
	var granted = false;

	$mField = $("#messageField");
	$mButton = $("#messageButton");
	$mForm = $("#messageForm");
	$aField = $("#agentField");
	$aForm = $("#agentForm");
	$aField.focus();
	var socket = io();
	$mField.focus();
	console.info("Socket connected and Jquery loaded");

	$mForm.on('submit',function(e){
		e.preventDefault();
		onMessageSubmit($mField.val());
		$mField.val("");
	})

	$aForm.on('submit',function(e){
		e.preventDefault();
		onAgentConnect($aField.val());
		$mField.val("");
	})

	socket.on('send-message',function(mess){
		console.info("Message",mess);
		mess.date = new Date(mess.date);
		addMessage(mess);
	})

	function onMessageSubmit(messageText){
		if(granted){
			var mess = new Message(messageText,agent);
			socket.emit('send-message',{
				message: mess
			});
			addMessage(mess);
		}
	}

	function onAgentConnect(messageText){
		if(!granted){
		$aForm.find("input").prop("disabled",true)
		$aField.val("");
		$aField.attr("placeholder","Demande d'autorisation");
			socket.once("access-granted",function(){
				agent = messageText;
				granted = true;
				$(".loginBox").addClass("hidden");
				$mField.focus();
			});
			socket.emit("request-access",{name:messageText});
		}
	}

	function addMessage(message){
		$("#messagesContainer").append(Mustache.render($("#messageTemplate").html(),{
			dateForm: formatDate(message.date),
			message: message
		}));
		$('#messagesContainer').animate({scrollTop: $('#messagesContainer').prop('scrollHeight')});
	}

	function formatDate(date){
		return date.getDate()+"/"+(date.getMonth()+1)+" "+(date.getHours()+1)+":"+(date.getMinutes()+1);
	}
})