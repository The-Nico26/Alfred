exports.regex = [
	/Que fais[- ]tu? ?\??/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Je suis le majordome particulier du côté osbcure de la force")
}