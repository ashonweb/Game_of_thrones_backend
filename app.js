const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
// const MongoClient = require("mongodb");
require('dotenv/config');
const bodyParser = require('body-parser');
const postRoute = require('./routes/posts');
const charactersRoute = require('./routes/characters');
const deatilsnoblehouseRoute = require('./routes/details');
const triviaRoute = require('./routes/trivias');
const friendsfoesRoute = require('./routes/friends_foes');
const whitewalkerRoute = require('./routes/whitewalkers')
app.use(cors())
app.use(bodyParser.json())
app.use ( bodyParser.urlencoded( {extended: true} ) );
app.use ( express.static( __dirname + '/public') );
app.use('/upload',express.static('upload'))
// mongoose.connect(
//     process.env.DB_CONNECTION,
//     {useMongoclient:true,useUnifiedTopology: true,useNewUrlParser: true,},
//     ()=>{
//     console.log('connected to db')
// })
mongoose.connect(process.env.DB_CONNECTION,  { useUnifiedTopology: true },err => {
    if (!err) console.log("Mongoose connection succeeded.");
    else console.log("Error in DB connection", err);
  });
// .then(()=>console.log("db connectin good"))
// .catch(err =>{
//     console.log(`${err.message}`)
// })

app.use('/posts',postRoute)
app.use('/characters',charactersRoute)
app.use('/details',deatilsnoblehouseRoute)
app.use('/trivia',triviaRoute)
app.use('/friendsfoes',friendsfoesRoute)
app.use('/walkers',whitewalkerRoute)



app.get('/',(req,res)=>{
    res.send("we are at home")
})

//connect to db

// MongoClient.connect(
//     process.env.DB_CONNECTION,
//     {useUnifiedTopology: true,useNewUrlParser: true},
//     ()=>{
//     console.log('connected to db')
// })
// .then(()=>console.log("db connectin good"))
// .catch(err =>{
//     console.log(`${err.message},fsfsfjfj`)
// })



// const { MongoClient } = require("mongodb");
// const dbName = "sample";

// // Replace the following with your Atlas connection string                                                                                                                                        
// const url =     process.env.DB_CONNECTION ;
// const client = new MongoClient(url);

// async function run() {
//     try {
//         await client.connect();

//         console.log("Connected correctly to server");
//         const db = client.db(dbName);

//         // Use the collection "people"
//         const col = db.collection("sampledata");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);


const port = process.env.PORT||3009     ;
app.listen(port,()=>{
    console.log(`listenin at ${port}`)
})