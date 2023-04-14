const { json } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const {SECRET_KEY} = require("../keys");
const userLogin = require("../middleware/userLogin")


router.post("/signup", async(req,res)=>{
    try{
        console.log(req.body)
    const {userId,password,confirm_password} = req.body;
    console.log(userId,password,confirm_password)
    if(!userId || !password || !confirm_password){
        return res.status(422).json({
            status:"Failed",
            error:"please enter all fields"
        })
    }
    if(password !== confirm_password){
        return res.status(421).json({
            status:"Failed",
            error:"password && confirm password must be same"
        })
    }
    let user = await User.findOne({userId:userId});
    if(user){
        return res.status(420).json({
            status:"Failed",
            error:"userId already exists"
        })
    }

    bcrypt.hash(password,10,async(err,hash)=>{
        if(err){
            return res.json({
                status:"Failed",
                error:err.message
            }) 
        }
        user = await User.create({
            
            userId,
            password: hash,
            confirm_password:hash
        });
        res.json({
            status:"Success",
            message:"Account sucessfully registered"
        }) 
    })
}catch(err){
    res.status(400).json({
        status:"Failed",
        error:err.message
    })
}
})

router.post("/signin", async(req,res)=>{
    const {userId,password} = req.body;
    if(!userId || !password){
        return res.status(422).json({
            status:"Failed",
            error:"please fill all data",
            // error:"please fill all data"
        })
    }
    const user = await User.findOne({userId : userId});
    if(!user){
        return res.status(422).json({
            status:"Failed",
            error:"userId not exists"
        })
    }
    bcrypt.compare(password, user.password, (err, result)=>{
        // result == true
        console.log(err,result)
        if(result === true){
            const token = jwt.sign({_id:user._id},process.env.SECRET_KEY);
            const {userId} = user;
            res.json({
                token,userId
            })
        }
        else{
            return res.status(422).json({
                status:"Failed",
                error:"plese verify user details and try again"
            })
        }
    });
})

router.post("/trail",userLogin,(req,res)=>{
    res.json({
        status:"success",
        message:"userLogin trail"
    })
})

router.post("/post",userLogin,(req,res)=>{
    console.log(req.user._id)
    res.end()
})

module.exports = router;