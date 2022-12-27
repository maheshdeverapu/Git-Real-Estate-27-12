const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

app.get("/",(req,res)=>{
    res.send("i am from real-estate project!")
})

app.listen(port,()=>{console.log(`server is up at port number ${port}`)})