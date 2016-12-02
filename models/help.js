const Message = require('../Message')

exports.regex = [
	/help/
]

exports.perform = function(message,socket){
	socket.emit("send-message", new Message("Commande existantes : ","Alfred"))	
	socket.emit("send-message", new Message("- Raconte moi une blague","Alfred"))
	socket.emit("send-message", new Message("- Au revoir","Alfred"))
	socket.emit("send-message", new Message("- kamoulox","Alfred"))
}