const socketio = require('socket.io')
var io = null;

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
		socket.emit('access-granted')
		socket.emit('send_message', {
			message : 'COUCOU !!!!!!! C\'EST MOI ALFRED !!!!',
			time : new Date(),
			author : 'Alfred'
		})
	})

	socket.on('get-history', (obj) => {
		for (var i = 0; i < messages.length; i++) {
			socket.emit('send_message', {
				message : messages[i],
				time : new Date(),
				author : name 
			})
		}
	})

	socket.on('send_message', (obj) => {
		socket.emit('send_message', {
			message : 'Attendez monsieur, je cherche. ...?!',
			time : new Date(),
			author : 'Alfred'
		})
	})
}

exports.init = init;