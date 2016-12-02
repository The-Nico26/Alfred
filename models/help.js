const Message = require('../Message')

exports.regex = [
	/help/
]

exports.perform = function(message,callback){
	callback(new Message("","Alfred"))	
}