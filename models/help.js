exports.regex = [
	/help/i,
	/Que puis[- ]je te demander ?\??/i,
	/Que puis[- ]je dire ?\??/i,
	/Que dire ?\??/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Il me semble que vous avez besoin d'aide")
	socket.sendMessage("Je suis alfred votre majordome particulier, je suis là pour vous aider. Vous pouvez me poser différentes questions pour que j'y réponde")
	socket.sendMessage("Vous pouvez me demander de me présenter (Qui est tu?, Quel âges as-tu ?, Quel est ton métieur ?, ...) Je peux aussi jouer avec vous au KAMOULOX")
	socket.sendMessage("De plus je peux faire des recherches sur wikipedia (Qu'est ce que ... ?, Qui est...?)")
	socket.sendMessage("Et puis je peux toujours vous distraire en vous racontant mes meilleurs boutades ! (Fais moi rire !, Divertie moi , Connais-tu une blague ?)")
}