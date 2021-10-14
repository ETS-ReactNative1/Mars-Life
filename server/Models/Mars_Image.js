const mongoose = require('mongoose')
const https = require('https')

const options = {
    hostname: 'api.nasa.gov',
    path: '/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UsULBxdgulmBqWNLnbcbaBjoyEVDpUUbFcZbf1td',
    method: 'GET'
}

//alert(options)                                          //alert

const req = https.request(options, res => {             //make changes???
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
        //console.log(JSON.parse(d))
        for(var i = 0; i < 10; i++) {
            console.log(JSON.parse(d).photos[i][img_src])
        }

    })
})

req.on('error', error => {
    console.error(error)
})
  
req.end()

//---schema---
const MarsImageSchema = new mongoose.Schema({
    sol:String,
    camera:String,
    img_src:String
})

mongoose.model("mars_image", MarsImageSchema)
