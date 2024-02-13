const express = require('express');
const app = express();
let routes = require('./routes/route')
const body_parser = require('body-parser')
const mongoose = require('./database/db')

app.use('/', routes);
app.set('view engine', 'ejs');
app.use(body_parser.urlencoded({extended: true}))

app.listen(3001, () => {
    console.log('server....');
})