const Message = require('../Message')

exports.regex = [
	/bonjour/i,
	/salut/i,
	/coucou/i
]

exports.perform = function(message,socket){
	socket.emit("send-message", new Message("Bonjour agent "+message.author, "Alfred"))
}