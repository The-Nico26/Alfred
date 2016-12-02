exports.regex = [
	/help/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Il me semble que vous avez besoin d'aide")
	socket.sendMessage("Si tu veux avoir un fou rire sans précédent, je peut te raconter une blague")
	socket.sendMessage("- Au revoir")
	socket.sendMessage("- kamoulox")
}