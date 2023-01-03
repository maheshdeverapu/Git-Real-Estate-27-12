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
        message:"enter all details",
        error:req.body
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
    // console.log(post,view)
    // idNum++;
    // view++;
    // console.log(idNum,view)
    res.json({
      post,
    });
  } catch (err) {
    res.status(421).json({
      status: "Failed at catch",
      message: err.message,
    });
  }
});

router.get("/getId",userLogin,async(req,res)=>{
    try{
    const {ppd_id} = req.query;
    // const {ppd_id} = req.body;
    // console.log(req.body)
    // console.log(req.user,req.body);
    // const user = await Post.find({ppd_id:{$regex:/^ppd_id/i}});
    const user = await Post.find({ppd_id:{$regex: new RegExp(ppd_id)}});
    // const user = await Post.find({ppd_id});
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
