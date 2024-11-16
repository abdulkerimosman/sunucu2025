const express = require("express") 
require('dotenv/config')
const db_connect=require("./db/mysql_connect")
const app = express() 
const port = process.env.PORT 
app.get("/",(req,res)=>{ // or post get for when something is wanted from us, post is when we want something   ///// '/' this shows the first page i.e. index.html
  res.json({
    message:'Welcome!' // the m
  })
})
app.listen(port,()=>{
  console.log(`Sunucu ${port} is working!`)
})