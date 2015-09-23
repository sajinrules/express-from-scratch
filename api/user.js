var express = require('express');
//var app 	= express();
var router 	= express.Router();
var controller = require('./user.controller')

/*router.get('/',function(req,res){
	res.json("first user route is ok");
})*/

router.get('/',controller.get)

module.exports = router;