const fs = require("fs")
const unknownSentences = [
	"Pardon ? je n'ai pas compris...",
	"Heuu... Agent ? je ne comprends pas...",
	"Je ne sait pas quoi faire...",
	"Je suis confu... mais je ne comprends pas",
	"Excusez moi, je ne sait pas quoi répondre :s",
	"Essayez vous de communiquer avec moi ?",
	"KAMOULOX !!!"
]
var allRegex = [];

function init(){
	var listFile = fs.readdirSync('./models/')
	for (var i = listFile.length - 1; i >= 0; i--) {
		 allRegex.push(require("./models/"+listFile[i]))
	}
}

function think(message, socket){
	for (var i = allRegex.length - 1; i >= 0; i--) {
		for (var x = allRegex[i].regex.length - 1; x >= 0; x--) {
			var regex = allRegex[i].regex[x];
			if(regex.test(message.message.message)){
				allRegex[i].perform(message.message, socket)
				return;
			}	
		}
	}
	socket.sendMessage(unknownSentences[Math.round(Math.random()*(unknownSentences.length-1))])
}

exports.init = init
exports.think = think