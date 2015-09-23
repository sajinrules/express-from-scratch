//var user = require('../db/user.model');
//var User = new user();
//console.log(user);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name:String,
    age: Number
});

// Mongoose Model definition
var User = mongoose.model('users', UserSchema);


exports.post = function(req,res,next){
	//res.send(user);
	//console.log(user);
	var user = new User({name:'Sajin',age: 26});
	user.save(function(err,data){
		if(err)
			console.log(err);
		console.log("data::",data);
	})
	res.json("first user route is ok");
}

exports.get = function(req,res,next){
	User.find({}, function (err, docs) {
		if(err)
			console.log(err);
		else
			console.log(docs);
        res.json(docs);
    });
}

// module.exports = function(req,res,next){
// 	get = function(req,res,next){
// 		res.json("first user route is ok");
// 	}
// }