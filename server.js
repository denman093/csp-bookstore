//npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

const routes = require('./routes/api');

//const MONGODB_URI = 'mongodb+srv://denman093:denman093@cluster0-7rogf.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.use('*', express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.join(_dirname, 'client','build','index.html'));
    });
}

app.listen(PORT, console.log(`Server starting at ${PORT}`));
