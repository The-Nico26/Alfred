const express = require("express")
const app = express()
const http = require("http").Server(app)
const socket = require("./socket")

socket.init(http)

app.use("/static",express.static(__dirname+"/static"))

app.get("/",(req,res) => {
	console.info("Index request from "+req.connection.remoteAddress)
	res.sendFile(__dirname+"/views/home.html")
})

http.listen(80, () => {
	console.info("Listening on *:80")
})