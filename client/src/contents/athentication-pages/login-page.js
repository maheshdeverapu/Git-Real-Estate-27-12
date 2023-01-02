import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import React from "react";
import M from "materialize-css"
import "./login-page.css";
const Signin = ()=>{
    // const [userDetails,setUserDetails] = useState({userId:"",password:""})
    const [userId,setUserId] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const loginHandling =()=>{
        // console.log(userDetails)
        // const {userId,password}= userDetails;
        if(!userId || !password){
            M.toast({html: 'please enter all fields'})
            return 
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"                
            },

            body:JSON.stringify({
                userId,
                password
            })
        }).then(res=>res.json()).then((data)=>{
            // console.log(localStorage.getItem("token"),"i am from .then in login page")
            // debugger
            if(data.status == 'Failed'){
                M.toast({html: data.message})
                navigate("/signin")
                return
            }
            
            console.log(data,"from then in login page");
            // debugger
           
                console.log(1,data.status)
            localStorage.setItem("token",data.token)
            localStorage.setItem("userId",data.userId)
    }).catch((err)=>{
        console.log(err)
    }).finally()
    console.log(localStorage.getItem("token"))
    navigate("/getId")
    }
    return(
        <div className="login-page">
            {/* <h3 className="login-logo">Logo</h3> */}
            <div className="login-content">
                <img className="login-logo"  src="https://media.istockphoto.com/id/1217096485/vector/geometric-logo-related-to-property-real-estate-agent-or-construction.jpg?s=612x612&w=0&k=20&c=ZdnrJ4sTVP3XwOrCzBHlbmclDVGtvXJwmQpImjkCM3Q="></img>
                <p  className="login-details">enter your credentials to access your accout</p>
                <form>
                    <div>
                        {/* <label htmlFor="userid">UserId</label> */}
                        <input className="login-mail" placeholder="MailID" type={"gmail"} id="userid" onChange={(event)=>{setUserId(event.target.value)}}></input>
                    </div>
                    <div>
                        {/* <label htmlFor="password">Password</label> */}
                        <input className="login-password" placeholder="PASSWORD" type={"password"} id="password" onChange={(event)=>{setPassword(event.target.value)}}></input>
                    </div>
                    <button className="login-submit" onClick={loginHandling}>Login</button>
                    <Link className="login-signup" to={"/signup"}>Signup</Link>
                    
                </form>
           </div>
        </div>

    )
}
export default Signin;