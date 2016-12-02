exports.regex = [
	/(au )?revoir/i,
	/bye/i,
	/[àa] plus/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Au revoir agent "+message.author)
}