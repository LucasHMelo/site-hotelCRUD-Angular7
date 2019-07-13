//var mongoose = require('mongoose');

module.exports = {
    db: 'mongodb://localhost:27017/hotel'
};

// mongoose.connect('mongodb://localhost/hotel');

// mongoose.connection.on('connected', function(){
//     console.log('Mongoose defautl connection open');
// });
// mongoose.connection.on('error', function(err){
//     console.log('Mongoose defautl connection error'+err);
// });
// mongoose.connection.on('disconnected', function(){
//     console.log('Mongoose defautl connection disconnected');
// });

// process.on('SIGINT', function(){
//     mongoose.connection.close(function (){
//         console.log('Disconnected');
//         process.exit(0);
//     });

// });