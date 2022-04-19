require('dotenv').config({path: '.env'});
require('./db/mongo_connect')

const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes/routes')



const port = process.env.PORT || 3210;
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use('/static', express.static('public'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist'));
app.use(routes);



app.listen(port, ()=> { 
    console.log(`Server listening on port: ${port}`);
});