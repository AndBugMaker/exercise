const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.listen(3000)
app.use(cookieParser())
app.use(function(req,res){
    req.secret="asdf"
    console.log(req.cookies)    
    res.cookie("age",1,{path:'/aaa',signed:true})
    res.send('ok')
})