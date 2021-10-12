const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Models/Article')
require('./Mars_Image')                             //require mars image

const Mars_Image = mongoose.model("mars_image")     //creating model

const app = express();
app.use(bodyParser.json());
const mongoURI = ""

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", ()=>{
    console.log("Connected to database");
})

mongoose.connection.on("error", (err)=>{
    console.log("Unable to connect to database", err);
})

const Article = mongoose.model("Article");

app.get('/',(req,res)=>{
    res.send("home");
})

app.post('/send-data',(req,res)=>{
    const article = new Article({
        title:req.body.title,
        date:req.body.date,
        body:req.body.body,
    })
    article.save()
    .then(data=>{
        console.log(data);
        res.send("success");
    }).catch(err=>{
        console.log(err);
    })

    const mars_image = new Mars_Image({                //mars image post ----
        sol:req.body.sol,
        camera:req.body.camera
    })
    mars_image.save()
    .then(data=>{
        console.log("image success!")
    }).catch(err=>{
        console.log(err)
    })                                                  //--------
})

app.listen(3000,()=>{
    console.log("server running");
})



