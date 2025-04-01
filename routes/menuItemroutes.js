const express = require('express');
const router = express.Router();
const menuItem = require('./../models/menuItem');

//  POST method to add a menu item
router.post('/', async(req, res)=>{
     try{
        const data = req.body
        const newMenu = new menuItem(data);
        const response = await newMenu.save();
        console.log('data fetched');
        res.status(200).json(response);
     }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
     }
})


// GET method to get the menu Items
router.get('/', async(req, res)=>{
  try{
    const data  = await menuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
  }
})

router.get('/:tasteType', async(req, res)=>{
  try{
    const tasteType = req.params.tasteType;  // extract the work type from the URL paramneter
    if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){
         const response = await Person.find({taste:tasteType});
         console.log('response fetched');
         res.status(200).json(response)
  }else{
    res.status(404).json({error:'Invalid taste Type'});
  }
  }
  catch(err){
    console.error('Error fetching tasteType data:', err);
    res.status(500).json({ error: "Internal server error" });
  }
})

// comment added for testing purpose
module.exports = router;