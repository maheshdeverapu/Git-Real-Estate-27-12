const Post = require("../models/post");
const userLogin = require("../middleware/userLogin");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
let idNum = 123456;
// let view = 1;

router.post("/createPost", userLogin, async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.user);
    const {property,
    price,
    propertyAge,
    propertyDescription,
    negotable,
    ownership, 
    propertyApproved ,
    bankLoan ,
    length ,
    breath ,
    area,                    
    areaUnit ,
    noOfBhk ,
    noOfFloor ,
    attached ,
    westernToilet ,
    furnished ,
    carParking ,
    lift ,
    electricity ,
    facing ,
 
    propertyOwner ,
    contact,                       
    postedBy ,
    saleType ,
    featuredPackage ,
    PPDPackage ,
    email ,
    city ,
    locationArea ,
    pincode ,
    address ,
    landmark ,
    latitude ,
    longitude, photo  } = req.body;
    // console.log(req.body)
    if (
      !property||
      !price||
      !propertyAge||
      !propertyDescription||
      !negotable||
      !ownership||
      !propertyApproved ||
      !bankLoan ||
      !length ||
      !breath ||
      !area||                    
      !areaUnit ||
      !noOfBhk ||
      !noOfFloor ||
      !attached ||
      !westernToilet ||
      !furnished ||
      !carParking ||
      !lift ||
      !electricity ||
      !facing ||
   
      !propertyOwner ||
      !contact||                       
      !postedBy ||
      !saleType ||
      !featuredPackage ||
      !PPDPackage ||
      !email ||
      !city ||
      !locationArea ||
      !pincode ||
      !address ||
      !landmark ||
      !latitude ||
      !longitude ||
      !photo
      ) {
      return res.status(422).json({
        status: "Failed",
        error:"enter all details",
        // error:req.body
      });
    }
    let tempId = await Post.find().sort({ ppd_id: -1 }).limit(1);
    if (tempId.length === 0) {
      tempId = idNum;
    } else {
      let str = tempId[0].ppd_id.split("D")[1];
      tempId = parseInt(str) + 1;
    }
    const post = await Post.create({
      ppd_id: "PPD" + tempId,
      views: 0,
      status: "unsold",
      property,
      price,
      propertyAge,
      propertyDescription,
      negotable,
      ownership, 

      propertyApproved ,
      bankLoan ,
      length ,
      breath ,
      area,                    
      areaUnit ,
      noOfBhk ,
      noOfFloor ,
      attached ,
      westernToilet ,
      furnished ,
      carParking ,
      lift ,
      electricity ,
      facing ,
     
      propertyOwner ,
      contact,                       
      postedBy ,
      saleType ,
      featuredPackage ,
      PPDPackage ,
      email ,
      city ,
      locationArea ,
      pincode ,
      address ,
      landmark ,
      latitude ,
      longitude,
      photo
    });
    res.json({
      post
    });
  } catch (err) {
    res.status(421).json({
      status: "Failed at catch",
      error: err.message,
    });
  }
});

router.get("/getId",userLogin,async(req,res)=>{
    try{
    const {ppd_id,pageSize} = req.query;
    const pageLimit = parseInt(req.query.limit) || 5;
    const start = parseInt(req.query.start) || 0;
    const end = req.query.end || pageLimit;
    console.log(req.query,start)
 
    const user = await Post.find({ppd_id:{$regex: new RegExp(ppd_id),$options:"i"}})
    .limit(pageLimit).skip(start);
    if(!user){
        return res.status(422).json({
            status:"Failed",
            message:"id does not exists"
        })
    }
    // console.log(user)
    res.json({
        user
    })
}
catch(err){
    res.status(400).json({
        status:"Failed",
        message:err.message
    })
}
})

router.get("/posts",userLogin,async(req,res)=>{
    const posts = await Post.find(req.posts);
    if(!posts){
        return res.status(400).json({
            status : "Failed",
            message : "empty - no posts"
        })
    }
    res.json({
        posts
    })
})
module.exports = router;
