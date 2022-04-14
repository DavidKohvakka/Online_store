require('dotenv').config({path: '.env'});

const express = require('express');
const routes = require('./routes/routes')
const path = require('path')

const port = process.env.PORT || 3210;
const app = express();


app.set('view engine', 'ejs')
app.use('/static', express.static('public'))
app.use('/css', express.static('node_modules/bootstrap/dist/css'))
app.use('/js', express.static('node_modules/bootstrap/dist/js'))
app.use('/js', express.static('node_modules/jquery/dist'))
app.use(routes)

app.get('/', (req, res) => {
    res.send("jkdfös")
})

app.listen(port, ()=> {
    console.log(`Server listening on port: ${port}`);
});