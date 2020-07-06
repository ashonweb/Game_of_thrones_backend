// const express = require ('express');
// const router = express.Router();
// const Post = require('../models/Detail');


// //Post details
// router.post('/',async (req,res)=>{
//     console.log('inside post')
//     console.log(req.body)
//     var post = new Post({
//         name: req.body.name,
//     });
//     try {
//         console.log('inside try')
//         const savedresult = await post.save();
//         res.json(savedresult);
             
//     }
//     catch(err) {
//         console.log('inside err')
//         console.log(err);
//         res.json({message:err})
//     }
//     console.log('after try catch');
//     // post.save()
//     // .then(data =>{
//     //     res.json(data)
//     //     res.send('item saved')
//     // })
//     // .catch(err=>{
//     //     // res.status(400).send("didn get to save to db")
//     //     res.json({message:err.message})
//     // })

// })
// module.exports= router;


const express = require ('express');
const router = express.Router();
const mongoose  = require('mongoose');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
    }
});

// const upload = multer({dest:'upload/'})
// const upload = multer({storage: storage})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'||file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};



const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5},
    fileFilter : fileFilter,
    });

const Post = require('../models/Swornhouses');



// const upload_bhagya = multer({storage : storage})
 

// let upload = multer({
//     storage: storage,
    
//     fileFilter: fileFilter
// });


//Get all details

router.get('/',async (req,res)=>{
    // res.json("hjjj")
    try {
        var q = req.query;
        console.log(q.house)
        if(q.house){
             const getdetails1 = await Post.findOne({house:q.house})
         console.log("foud")
        res.json(getdetails1);
        }
        else {
        // res.json(q)
        // let name = req.query.id;
        // console.log(name,"name")
        console.log("iside try of get request")
        const getdetails = await Post.find()
        console.log("foud")
        res.json(getdetails);
        }
    } catch(err) {
        res.json({message:err})
    }
});

//Post details
router.post('/',upload.single('logo'),async (req,res)=>{
    console.log('inside post')
    console.log(req.file);
    var post = new Post({
        description: req.body.description,
        house: req.body.house,
        logo:req.file.place,
        sigil:req.body.sigil,
        words:req.body.words,
        seat:req.body.seat,
        weapon:req.body.weapon,
        region:req.body.region,
        titles:req.body.titles,
        religion:req.body.religion,
        lord:req.body.lord,
        swornto:req.body.swornto,
    });

    // post.save((err) => {
    //     if(err){
    //         res.status(400)
    //       console.log("gettign error..",err);
    //     } else {
    //         res.status(200)
    //         res.json({"result":"success"});
    //       console.log('you saved'); //i see this in the console too
    //     }
    //   });
    try {
        console.log('inside try')
        const savedresult = await post.save();
        res.json(savedresult);
        console.log("saved")
      
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

//Get specfic details based on id
router.get('/:id',async (req,res)=>{
    console.log(req.params.id)
   
   try{ const details = await  Post.findById(req.params.id)
   res.json(details)
}catch(err){
    res.json({message:err})
}

})
//want to find by name
// router.get('/:name',async (req,res)=>{
//     console.log(req.query.name)
//    try{ const details = await  Post.findOne({name:req.query.name})
//    res.json(details)
// }catch(err){
//     res.json({message:err})
// }

// })
//delete by id
router.delete('/:id',async (req,res)=>{
    try {
        const deletedetails = await Post.remove({_id:req.params.id})
        res.json(deletedetails)
    }
    catch (err) {
        res.json({message:err})

    }
})

//update

router.patch('/:id',async(req,res)=>{
    try {
        const updatedetails = await Post.updateOne({_id:req.params.id},{$set:{name:req.body.name}})
        
        res.json(updatedetails)
    }
    catch (err) {
        res.json({message:err})

    }
})

module.exports= router;