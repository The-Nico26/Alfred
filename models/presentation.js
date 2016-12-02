exports.regex = [
	/pr[éeè]sent[- ](tu|toi)/i,
	/qui[- ]est?[- ](tu|toi)/i,
	/t[u' ]+es qu(oi|i) ?\?/i

]

exports.perform = function(message,socket){
	socket.sendMessage("Je m'appelle Alfred. Je suis créé par DarthCorder et ma fonction est majordome")
}