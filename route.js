var express = require('express');
var app 	= express();
var router 	= express.Router();
module.exports = function(app){
	app.use('/api/user',require('./api/user'));
	app.use('/api/item',require('./api/item'));
}

/*router.get('/',function(req,res){
	res.json("first route is ok");
})*/
//module.exports = router