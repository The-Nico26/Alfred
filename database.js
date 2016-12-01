const mysql = require("mysql")

var database = null;

function init(){
	database = mysql.createConnection({
		host	: 'localhost',
		user	: 'root',
		password: 'root',
		database: 'alfred'
	})
	database.connect()
}

exports.init = init
exports.gdb = function(){ return database; }