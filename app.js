const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
mongoose.set('strictQuery', false);
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path:"config.env"})
}
const port = process.env.port || 5000;
// const temp = require("./keys");

mongoose.set('strictQuery', false)

const db = process.env.MONGOURI;
// console.log(db)
const connectDatabase =async()=>{
    try {
         await mongoose.connect(db);
      
        console.log('MongoDB is Connected...')
    } catch (err) {
        console.error(err.message);
        console.log('Check Your ENV VAR')
        process.exit(1)
    }
}

connectDatabase();
app.use(cors());
app.use(express.json());
app.use(require("./routing/authentication"));
app.use(require("./routing/post"));


if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}
app.listen(port,()=>{console.log(`server is up at port number ${port}`)})