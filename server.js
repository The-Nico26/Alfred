const express = require("express");

const app = express();

app.get("/",(req,res) => {
	res.end("La page d'index !");
});

app.listen(80)