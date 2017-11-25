const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.listen(3000)
app.use(bodyParser.urlencoded())
app.use(function(req,res,next){
  console.log(req.body)
  res.send("got it")
})