var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/test';
mongoose.connect(dbUrl);
mongoose.connection.on('connection',function(connetion){
	console.log('Mongoose default connection open to ' + dbUrl);
})
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 