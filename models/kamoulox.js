const Message = require('../Message')

var words = [
	"Parapluie",
	"Beignet",
	"Javascript",
	"Licorne",
	"Mimi Mathieu",
	"Kiwi",
	"violon ",
	"café ",
	"darthcoder",
	"Stéphanie de monaco",
	"frangipane",
	"bide",
	"sanglier",
	"réverbère",
	"fourchette",
	"Lituanie",
	"kyste",
	"MarineLand",
	"sardine",
	"Lunaire",
	"tronc",
	"tondeuse",
	"diagramme",
	"concave",
	"inondation",
	"frein",
	"hutte",
	"casserole",
	"agiter",
	"hermétique",
	"tribunal",
	"verger",
	"environnementalisme",
	"bracelet",
	"amygdales",
	"nuageux",
	"dément",
	"Hawaii",
	"portefeuille",
	"crème",
	"cible",
	"haleine",
	"cocon expéditeur",
	"seau",
	"molaire",
	"Kremlin",
	"tortilla",
	"voisin",
	"trampoline",
	"vodka",
	"oursin",
	"ornitorinque"
]

exports.regex = [
	/kamoulox/i,
]

exports.perform = function(message,socket){
	var word = words[Math.round(Math.random()*(words.length-1))]
	socket.sendMessage(word.toUpperCase()+" !!!")	
}