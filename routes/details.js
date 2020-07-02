const express = require ('express');
const router = express.Router();
const Post = require('../models/Detail');


//Post details
router.post('/',async (req,res)=>{
    console.log('inside post')
    console.log(req.body)
    var post = new Post({
        name: req.body.name,
    });
    try {
        console.log('inside try')
        const savedresult = await post.save();
        res.json(savedresult);
             
    }
    catch(err) {
        console.log('inside err')
        console.log(err);
        res.json({message:err})
    }
    console.log('after try catch');
    // post.save()
    // .then(data =>{
    //     res.json(data)
    //     res.send('item saved')
    // })
    // .catch(err=>{
    //     // res.status(400).send("didn get to save to db")
    //     res.json({message:err.message})
    // })

})
module.exports= router;