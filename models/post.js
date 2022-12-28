const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postSchema = new Schema({
    ppd_id :{type:String,required:true},
    property: {type:String,required:true},
    contact : {type:Number,required:true},
    area : {type:Number,required:true},
    views : {type:Number,required:true},
    status : {type:String,required:true}
})

const post = mongoose.model("Post",postSchema);
module.exports = post;