const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    User.find( { } )
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

router.post('/save', (req, res) => {
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

router.get('/name', (req, res) => {
    const data = {
        username: 'duane123',
        password: 'def456'
    };
    res.json(data);
});

module.exports = router;