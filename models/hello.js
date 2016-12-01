const Message = require('../message')

exports.regex = [
	"bonjour",
	"salut"
]

exports.perform = function(message,callback){
	callback(new Message("Bonjour agent","Alfred"))	
}