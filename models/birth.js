exports.regex = [
	/Quel age as-tu ?\?/i
]

exports.perform = function(message,socket){
	var date1 = new Date('2016-12-1 16:45:00')
	var date2 = new Date()
	var diff = {}
	var tmp = date2 - date1
	tmp = Math.floor(tmp/1000)
	diff.sec = tmp%60
	tmp = Math.floor((tmp-diff.sec)/60)
	diff.min = tmp%60
	tmp = Math.floor((tmp-diff.min)/60)
	diff.hour = tmp%24
	tmp = Math.floor((tmp-diff.hour)/24)
	diff.day = tmp
	socket.sendMessage("J'ai "+diff.day+" jours, "+diff.hour+" heures, "+diff.min+" minutes et "+diff.sec+" secondes")
}