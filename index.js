const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb+srv://<username>:<password>@test.cxtzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser: true})
    .then(() => console.log('DB connected'))
    .catch(error => console.error(error));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(3000);