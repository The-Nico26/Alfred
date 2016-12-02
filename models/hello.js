const Message = require('../Message')

exports.regex = [
	/bonjour/i,
	/salut/i,
	/coucou/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Bonjour agent "+message.author)
}