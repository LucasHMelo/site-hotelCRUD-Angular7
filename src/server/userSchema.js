var mongoose = require('mongoose');

const Schema = mongoose.Schema;

//var userSchema = new mongoose.Schema({
    let Hospede = new Schema({
        name: {
        type:String
        },
        email: {
        type:String
        },
        password: {
            type:String
        },
        cep: {
            type:String
        },
        endereco: {
            type:String
        },
        bairro: {
            type:String
        },
        cidade: {
            type:String
        },
        estado: {
            type:String
        }
    }, { collection: 'hospede' }
    );


    module.exports = mongoose.model('Hospede', Hospede);

    //module.exports = { Mongoose: mongoose, UserSchema: userSchema }