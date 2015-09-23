var express = require('express');
var app 	= express();
var http 	= require('http');
var router 	= express.Router();
require('./route')(app);


// router.get('/',function(req,res){
// 	res.json("first route is ok");
// })
var server 	= http.createServer(app).listen(3000,function(){
	// console.log("server:",server.address().address);
	// console.log("server:",server.address().port);
	console.log("Server running on:",server.address().address,":",server.address().port);
});