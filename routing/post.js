const Post = require("../models/post");
const userLogin = require("../middleware/userLogin");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
let idNum = 123456;
router.post("/createPost", userLogin, async (req, res) => {
  try {
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
      status,
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
    // console.log(req.body.addProperties,req.body.userId)
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
      !status||
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
    let user = await User.findOne({userId:req.body.userId});
    console.log(user);

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
      status,
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
    user.userPost.unshift(post);
    user.save();
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
router.get("/myPosts/:userId",userLogin,async(req,res)=>{
  try{

    let user = await User.findOne({userId:req.params.userId});
    // console.log(user)
    if(user.userPost?.length == 0){
      return res.json({
        error:"no posts"
      })
    }
    let post = await Post.find({_id:{$in:user.userPost}}).sort({ppd_id:-1});
    // console.log(post)
    res.json(
      post
    )
  }catch(err){
    res.status(421).json({
      status: "Failed at catch",
      error: err.message,
    });
  }
})

router.get("/getId",userLogin,async(req,res)=>{
    try{
    const {ppd_id,pageSize} = req.query;
    const pageLimit = parseInt(req.query.limit) || 5;
    const start = parseInt(req.query.start) || 0;
    const end = req.query.end || pageLimit;
    console.log(req.query,start)
 
    const user = await Post.find({ppd_id:{$regex: new RegExp(ppd_id),$options:"i"}}).sort({ppd_id:-1})
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

router.post("/propertySold",async(req,res)=>{
  try{

    // console.log(req.body)
      // let user = await User.findOne({userId:req.body.userId});
      // let post = await Post.findOne({ppd_id:req.body.ppd_id});
      let post = await Post.updateOne({ppd_id:req.body.ppd_id},{$set:{status:req.body.status}});
      // console.log(post)
      // if(!posts){
      //     return res.status(400).json({
      //         status : "Failed",
      //         message : "empty - no posts"
      //     })
      // }
      // user = user.posts.find(post=>) 
      res.json({
          post
      })
  }catch(err){
    res.status(400).json({
      status:"Failed",
      message:err.message
  })
  }
})
router.delete("/deleteMyPost/:postId",userLogin,async(req,res)=>{
  try{
    const post = await Post.deleteOne({_id:req.params.postId})
    // console.log(post)
    const user = await User.findOne({userPost:{$in:[req.params.postId]}});
    console.log(user.userPost)
    let arr =  user.userPost;
    console.log(arr)
    let index = arr.indexOf(req.params.postId);
    console.log(index)
    arr.splice(index,1);
    user.save();

    // let userid = await user.userPost.deleteOne({_id:req.params.postId})

    console.log(user,userid);
    res.json({
      message:"successfully deleted"
    })
  }catch(err){
    res.status(400).json({
      status:"Failed",
      message:err.message
  })
  }
})
router.put("/updatePost",userLogin,async(req,res)=>{
  try{
    console.log(req.body)
    const {
      _id,
      ppd_id,
      views,
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
        status,
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
    const postUpdate = await Post.updateOne({_id:req.body._id},{$set:{
      _id:_id.str,
      ppd_id,
      views,
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
        status,
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
      longitude, photo }})
    console.log(postUpdate);
    res.json({
      postUpdate
    })
  }catch(err){
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
