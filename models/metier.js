exports.regex = [
	/Quel est ton m[éeè]tier ?\??/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Je suis un majordome particulier")
}