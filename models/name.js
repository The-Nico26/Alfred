exports.regex = [
	/Comment[- ]*t[' ]*appelles[' ]*tu[ \?]*/i,
	/Quel[- ]*est ton (nom|pr[éeè]nom)[ \?]*/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Je m'appelle Alfred")
}