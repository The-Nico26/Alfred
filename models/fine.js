var fineSentences = [
	"Aussi bien que l'on puisse aller",
	"Je vais très bien, merci",
	"Bien, merci"
]

exports.regex = [
	/comment [çcs]a va( \?)?/i,
	/[çcs]a va( \?)?/i,
	/comment vas?[- ]tu( \?)?/i

]

exports.perform = function(message,socket){
	var fineSentence = fineSentences[Math.round(Math.random()*(fineSentences.length-1))]
	socket.sendMessage(fineSentence)	
}