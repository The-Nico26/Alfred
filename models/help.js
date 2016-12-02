const Message = require('../Message')

exports.regex = [
	/help/
]

exports.perform = function(message,callback){
	socket.emit("send-message", new Message("En cours","Alfred"))	
}