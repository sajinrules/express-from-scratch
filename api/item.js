var express = require('express');
//var app 	= express();
var router 	= express.Router();

router.get('/',function(req,res){
	res.json("first item route is ok");
})

module.exports = router;