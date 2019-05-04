var http = require('http');
var express = require('express');
var app = express();
app.set("view engine", "vash");

app.get("/", function (req, res) {
    res.render("index", { title: "Express+vash" });
});


var server = http.createServer(app);
server.listen(3000);