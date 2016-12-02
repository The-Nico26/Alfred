var thanksSentences = [
	"Il n'y a pas de quoi",
	"Je serais toujours là pour vous",
	"De rien",
	"Vous êtes le bienvenue"
]

exports.regex = [
	/merci/i,

]

exports.perform = function(message,socket){
	var thanks = thanksSentences[Math.round(Math.random()*(thanksSentences.length-1))]
	socket.sendMessage(thanks)	
}