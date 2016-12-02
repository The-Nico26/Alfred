const Message = require('../Message')

exports.regex = [
	/(au )?revoir/i,
	/bye/i,
	/[àa] plus/i
]

exports.perform = function(message,callback){
	callback(new Message("Au revoir agent "+message.author,"Alfred"))	
}