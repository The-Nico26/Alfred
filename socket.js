const socketio = require('socket.io')
const Message = require('./Message')
const ia = require('./ia')
var io = null

function init(http){
	io = socketio(http)
	io.on('connection', onConnection)
}

function onConnection(socket){
	var messages = []
	var name = null
	console.info("Socket connection on id "+socket.id)
	socket.sendMessage = function(message){
		this.emit('send-message', new Message(message, 'Alfred'))
	}

	socket.on('request-access', (obj) =>{
		name = obj.name
		console.info(name+" is requesting a conversation")
		socket.emit('access-granted')
		socket.sendMessage('Que puis-je faire pour vous ?')
	})

	socket.on('get-history', (obj) => {
		for (var i = 0; i < messages.length; i++) {
			socket.sendMessage(messages[i])
		}
	})

	socket.on('send-message', (obj) => {
		ia.think(obj, socket)
	})
}

exports.init = init;