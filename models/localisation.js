exports.regex = [
	/O[ùu] h[aâ]bites? ?\??/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Je suis localiser avec mon antenne vers Ecully chez Darthcoders")
}