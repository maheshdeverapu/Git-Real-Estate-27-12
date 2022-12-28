const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {MONGOURI} = require("./keys");

const port = 5000;

mongoose.connect(MONGOURI,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')})
app.use(express.json());
app.use(require("./routing/authentication"));
app.get("/",(req,res)=>{
    res.send("i am from real-estate project!")
})
app.post("/posting",(req,res)=>{
    console.log(req.body)
    res.end()
})


app.listen(port,()=>{console.log(`server is up at port number ${port}`)})