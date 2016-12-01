const Message = require('../Message')

exports.regex = [
	/bonjour/i,
	/salut/i
]

exports.perform = function(message,callback){
	callback(new Message("Bonjour THE agent","Alfred"))	
}