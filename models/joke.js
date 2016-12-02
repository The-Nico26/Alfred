const Message = require('../Message')

var jokes = [
	"C'est Luke qui rentre dans un bar, il apperçoit Obi Wan, va le voir et lui dit \"Salut Obi, comment tu vois j'ai acheté un super Avenger !\" et Obi Wan lui répond \"Oui, je l'ai vu garé devant, ça t'a couté un bras visiblement\" ;)",
	"Sais-tu pourquoi l'empereur ne prend jamais l'hélicoptère ?... Car à chaque fois qu'il rentres dedans, les pales patines... ;)",
	"Que font les Siths quand ils viellissent ?... Ils rouillent... Car les sithrouille... ;)"
]

exports.regex = [
	/raconte moi une blague/i,
	/diverti[es]? moi/i,
	/connais[- ]tu une blague( \?)?/i,
	/fais moi rire( !)?/
]

exports.perform = function(message,callback){
	var joke = jokes[Math.round(Math.random()*(jokes.length-1))]
	socket.emit("send-message", new Message(joke,"Alfred"))	
}