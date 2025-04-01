const mongoose = require('mongoose');


// define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels' // replace 'mydatabase' with your database name

// set up mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// get the default connection
// mongoose maintains a default connection objects connection object representing the mongoDB connection.
const db = mongoose.connection;

db.on('connected', () =>{
    console.log('connected to mongodb server');
})
db.on('error', (err) =>{
    console.log('mongodb connection error');
})
db.on('disconnected', () =>{
    console.log('mongodb disconnected');
})

// export the data batabase connection
module.exports = db;