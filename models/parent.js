exports.regex = [
	/qui sont tes parents? ?\??/i,
	/as-? ?tu tes parents? ?\??/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Je suis nées par l'union de tout les DarthCoders")
}