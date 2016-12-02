exports.regex = [
	/qui sont des parents? ?\?/i,
	/as-? ?tu des parents? ?\?/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Je suis nées par l'union de tout les DarthCoders")
}