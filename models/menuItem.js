const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String, 
        rerquired: true,
    },
    price:{
        type: Number,
        rerquired: true,
    },
    taste:{
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true,
    },
    ingredients:{
        type: [String],
       default:[]
    },
    num_sales:{
        type: Number,
        default: 0,
    }
    
})

const menuItem = mongoose.model('menuItem',menuItemSchema)
module.exports = menuItem;