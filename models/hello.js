exports.regex = [
	/bonjour/i,
	/salut/i,
	/coucou/i,
	/hello/i,
	/hey/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Bonjour agent "+message.author)
}