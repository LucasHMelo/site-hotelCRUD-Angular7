const express = require('express'),
      cors = require('cors'),
      path= require('path'),
      bodyParser= require('body-parser'),
      mongoose= require('mongoose'),
      config = require('./db');
      crudRoute = require('./crud-routes');

      mongoose.connect(config.db,{useNewUrlParser:true}).then(() => {
        console.log("Connected to Database");
        }).catch((err) => {
            console.log("Not Connected to Database ERROR! ", err);
        });

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/admin', crudRoute);


const server = app.listen(3000,()=> {
    console.log("Server is running on port 3000")
})


















// const express = require('express')
// const bodyParser = require('body-parser')
// const path = require('path')
// const mongo = require('mongoose')
// const cors = require('cors')
// const UserModel = require('./userSchema');
// require('./db')

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(cors());

// app.use(function(req, res, next){
//     res.setHeader('Acess-Control-Allow-Origin', '*');
//     res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Acess-Control-Allow-Headers', 'Origin, Content-Type, X-Acess-Token');
//     res.setHeader('Acess-Control-Allow-Credentials',true);
//     next();

// }); 

// app.get('/', (req,res)=>{
//     res.end("Welcome to root path");
// });


// // app.post('/api', (req, res, next) => {
// //         var db = require('./userSchema');
// //         var User = db.Mongoose.model('hospede', db.UserSchema, 'hospede');
// //         var newuser = new User({ name: req.body.name, email: req.body.email, phone: req.body.phone,topic: req.body.topic,
// //         timePreference: req.body.timePreference,subscribe: req.body.subscribe });
// //         newuser.save(function (err) {
// //             if (err) {
// //                 res.status(500).json({ error: err.message });
// //                 res.end();
// //                 return;
// //             }
// //             res.json(newuser);
// //             res.end();
// //         });
// //     });



// // app.get('/api',(req,res,next)=>{
// //     var db = require('./userSchema');
// //     var User = db.Mongoose.model('user', db.UserSchema, 'user');
// //     User.find({}).lean().exec(function(e,docs){
// //            res.json(docs);
// //            res.end();
// //     });
// // })

// app.listen(3000, () =>{
//     console.log("Server is Running...");
// })