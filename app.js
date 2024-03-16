const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

const loginRoutes = require('./routes/login');

const chatRoutes = require('./routes/chat');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/login',loginRoutes);

app.use('/:uname',chatRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);