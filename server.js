const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json())

const Person = require('./models/Person')
const menuItem = require('./models/menuItem')
app.get('/', function(req, res){
    res.send('welcome to my hotel... how i can help you, we have list of menu');
}) 
 
// import the router files
const personRoutes = require('./routes/Personroutes');
const menuItemRoutes = require('./routes/menuItemroutes')

app.use('/Person', personRoutes);
app.use('/menu', menuItemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(3000, ()=>{
    console.log("listening on port 3000")
});
