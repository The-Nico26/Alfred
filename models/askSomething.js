const http = require('http')
const request = require('request')

var regex = [
	/Qu[' ]est[- ]ce qu(e|') ?(la|le|les|un|une|l')? ?(.+)( \?)?/i,
	/Qui est (.+)( \?)?/i
]

exports.perform = function(message,socket){
	socket.sendMessage("Je cherche sur Wikipedia...")
	var searchword = null;
	var wikiSerachOptions = null
	if(regex[0].test(message.message)){
		searchword = message.message.replace(regex[0],"$3")
		wikiSerachOptions = "http://fr.wikipedia.org/w/api.php?action=opensearch&search="+searchword+"&format=json&utf8"
	} else {
		searchword = message.message.replace(regex[1],"$1")
		wikiSerachOptions = "http://fr.wikipedia.org/w/api.php?action=opensearch&search="+searchword+"&format=json&utf8"
	}
	request(wikiSerachOptions,(err,res,result) => {
		try{
			result = JSON.parse(result)
			if(result[2].length > 0){
				socket.sendMessage("C'est bon, j'ai trouvé !")
				if(result[2][0] == ""){
					socket.sendMessage(result[2][1])
				} else {
					socket.sendMessage(result[2][0])
				}
			} else {
				socket.sendMessage("Je ne trouve rien à propos de "+searchword)
			}
		} catch(e) {
			console.error(e)
			socket.sendMessage("Whoops, j'ai une érreur... proposez autre chose peut être...")
		}
	})
}

exports.regex = regex