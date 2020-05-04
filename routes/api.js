const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Textbook = require('../models/textbook');
const Shipping = require('../models/shipping');

router.get('/getUser', (req, res) => {
    User.find( { } )
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

router.get('/getTextbook', (req, res) => {
    Textbook.find( { } )
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

router.get('/getShipping', (req, res) => {
    Shipping.find( { } )
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

router.post('/saveShipping', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newShipping = new Shipping(data);

    newShipping.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, internal server error occurred'});
            return;
        }

        return res.json({
            msg: 'Data is received!'
        });
    });
});

router.post('/saveUser', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newUser = new User(data);

    newUser.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, internal server error occurred'});
            return;
        }

        return res.json({
            msg: 'Data is received!'
        });
    });
});

module.exports = router;