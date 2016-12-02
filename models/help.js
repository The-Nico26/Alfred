const Message = require('../Message')

exports.regex = [
	/help/
]

exports.perform = function(message,socket){
	socket.sendMessage("Commande existantes : ")
	socket.sendMessage("- Raconte moi une blague")
	socket.sendMessage("- Au revoir")
	socket.sendMessage("- kamoulox")
}