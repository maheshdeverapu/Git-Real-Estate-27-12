const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; 

const userSchema = new Schema({
   
    id:{type:String},
    userId : {type:String, required:true},
    password:{type:String, required:true},
    confirm_password:{type:String, required:true}
})
const user = mongoose.model("User",userSchema);
module.exports = user;