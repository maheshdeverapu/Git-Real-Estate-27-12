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
    const { property, contact, area } = req.body;
    if (!property || !contact || !area) {
      return res.status(422).json({
        status: "Failed",
        message: "please enter all required fields and try again",
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
      property,
      contact,
      area,
      views: 0,
      status: "unsold",
    });
    // console.log(post,view)
    // idNum++;
    // view++;
    // console.log(idNum,view)
    res.json({
      post,
    });
  } catch (err) {
    res.status(422).json({
      status: "Failed",
      message: err.message,
    });
  }
});

router.get("/getId",userLogin,async(req,res)=>{
    try{
    const {ppd_id} = req.body;
    // console.log(req.user,req.body);
    const user = await Post.findOne({ppd_id});
    if(!user){
        return res.status(422).json({
            status:"Failed",
            message:"id does not exists"
        })
    }
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
module.exports = router;
