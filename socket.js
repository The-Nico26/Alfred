const socketio = require('socket.io')
var io = null;

function init(http){
	io = socketio(http)
	io.on('connection', onConnection)
}

function onConnection(socket){
	console.info("Socket connection on id "+socket.id)
	socket.on('request-access',(obj) => {

	})
}

exports.init = init;