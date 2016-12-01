const socketio = require('socket.io')
const ia = require('./ia')
var io = null

function init(http){
	io = socketio(http)
	io.on('connection', onConnection)
}

function onConnection(socket){
	var messages = [];
	var name = null;
	console.info("Socket connection on id "+socket.id)
	socket.on('request-access', (obj) =>{
		name = obj.name
		console.info(name+" is requesting a conversation")
		socket.emit('access-granted')
		socket.emit('send-message', {
			message : 'COUCOU !!!!!!! C\'EST MOI ALFRED !!!!',
			date : new Date(),
			author : 'Alfred'
		})
	})

	socket.on('get-history', (obj) => {
		for (var i = 0; i < messages.length; i++) {
			socket.emit('send-message', {
				message : messages[i],
				date : new Date(),
				author : name 
			})
		}
	})

	socket.on('send-message', (obj) => {
		ia.think(obj, (message)=> {
			socket.emit('send-message', 
				message)
		})
	})
}

exports.init = init;