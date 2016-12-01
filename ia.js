const fs = require("fs")
var allRegex = [];

function init(){
	var listFile = fs.readdirSync('./models/')
	console.log(listFile)
	for (var i = listFile.length - 1; i >= 0; i--) {
		 allRegex.push(require("./models/"+listFile[i]))
	}
	console.log(allRegex)
}

function think(message, callback){
	for (var i = allRegex.length - 1; i >= 0; i--) {
		for (var x = allRegex[i].regex.length - 1; x >= 0; x--) {
			var regex = allRegex[i].regex[x];
			if(regex.test(message.message.message)){
				allRegex[i].perform(message.message, callback)
			}	
		}
	}
}

exports.init = init
exports.think = think