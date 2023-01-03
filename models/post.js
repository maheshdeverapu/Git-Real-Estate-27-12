const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postSchema = new Schema({
    ppd_id :{type:String,required:true},
    // property: {type:String,required:true},
    // contact : {type:Number,required:true},
    // area : {type:Number,required:true},
    views : {type:Number,required:true},
    status : {type:String,required:true},
    property : {type:String,required:true},//                   //
    price : {type:Number,required:true},//
    propertyAge : {type:String,required:true},//
    propertyDescription : {type:String,required:true},//
    negotable : {type:String,required:true},//
    ownership : {type:String,required:true},//
    propertyApproved : {type:String,required:true},//
    bankLoan : {type:String,required:true},//
    length : {type:Number,required:true},//
    breath : {type:Number,required:true},//
    area : {type:Number,required:true},//                     //
    areaUnit : {type:String,required:true},//
    noOfBhk : {type:String,required:true},//
    noOfFloor : {type:String,required:true},//
    attached : {type:String,required:true},//
    westernToilet : {type:String,required:true},//
    furnished : {type:String,required:true},//
    carParking : {type:String,required:true},//
    lift : {type:String,required:true},//
    electricity : {type:Number,required:true},//
    facing : {type:String,required:true},//
    
    propertyOwner : {type:String,required:true},//
    contact : {type:Number,required:true}, //                        //
    postedBy : {type:String,required:true},//
    saleType : {type:String,required:true},//
    featuredPackage : {type:String,required:true},//
    PPDPackage : {type:String,required:true},//
    email : {type:String,required:true},//
    city : {type:String,required:true},//
    locationArea : {type:String,required:true},//
    pincode : {type:String,required:true},//
    address : {type:String,required:true},//
    landmark : {type:String,required:true},//
    latitude : {type:String,required:true},//
    longitude : {type:String,required:true},//
    photo : {type:String,required:true}//
})

const post = mongoose.model("Post",postSchema);
module.exports = post;