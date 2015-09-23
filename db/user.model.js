//var mongooseConnection = require('./mongo-connect');
var mongoose = require('mongoose');
//var mongooseConnection = mongoose.createConnection('localhost', 'test');
var mongooseConnection = mongoose.connect('mongodb://localhost:27017/test',function(err){
	if(err)
		console.log(err);
});

var Schema = mongoose.Schema;

var userSchema = new Schema({
	a:Number
});

var User = mongooseConnection.model('test_insert',userSchema);
module.exports = User;