var insultes = [
	"C'est n'est pas correct ",
	"Surveille ton langage gamin ",
	"Ta mère ne serait pas fier ",
	"Les insultes est le langages des pauvres"
]

exports.regex = [
	/connard/i,
	/putain/i,
	/ferme-la( !)?/i,
	/pute/i,
	/nique/i,
	/gueule/i,
	/foutre/i,
	/merde/i,

]

exports.perform = function(message,socket){
	var insulte = insultes[Math.round(Math.random()*(insultes.length-1))]
	socket.sendMessage(insulte)	
}