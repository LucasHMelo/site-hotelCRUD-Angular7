const express = require('express');

const app = express();
const hospedesRoutes = express.Router();

/* Require hospedes models here */
let Hospedes = require('./userSchema');

// Adding new data

hospedesRoutes.route('/add').post((req, res) => {
    let hospedes = new Hospedes(req.body);
    hospedes.save().then(hospedes => {
        res.status(200).json({ 'hospedes': 'hospedes is added successfully' });
    })
        .catch(err => {
            res.status(400).send('Unable to add  hospedes to database')
        });
});

//Getting all stored data

hospedesRoutes.route('/').get((req, res) => {
    Hospedes.find(function (err, hospedes) {
        if (hospedes) {
            res.json(hospedes);
        } else {
            console.log(err);
        }
    });
});

// Editing the data 
hospedesRoutes.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    Hospedes.findById(id, (err, hospedes) => {
        res.json(hospedes);
    });
});

// Updating the data

hospedesRoutes.route('/update/:id').post((req, res) => {
    Hospedes.findById(req.params.id, (err, hospedes) => {
        if (!hospedes) {
            return next(new Error('Could not load the document'));
        } else {
            hospedes.name = req.body.name;
            hospedes.email = req.body.email;
            hospedes.password = req.body.password;
            hospedes.cep = req.body.cep;
            hospedes.endereco = req.body.endereco;
            hospedes.bairro = req.body.bairro;
            hospedes.cidade = req.body.cidade;
            hospedes.estado = req.body.estado;

            hospedes.save().then(hospedes => {
                res.json('Data Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send('Unable to update the database');
                });
        }
    });
});

// Deleting the data

hospedesRoutes.route('/delete/:id').get((req, res) => {
    let id = req.params.id;
    Hospedes.findByIdAndDelete(id, (err, hospedes) => {
        if (err) {
            res.json(err)
        } else {
            res.json('Data Removed Successfully');
        }
    });
});

module.exports = hospedesRoutes;