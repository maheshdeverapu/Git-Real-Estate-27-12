import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import React from "react";
const Signin = ()=>{
    // const [userDetails,setUserDetails] = useState({userId:"",password:""})
    const [userId,setUserId] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const loginHandling =()=>{
        // console.log(userDetails)
        // const {userId,password}= userDetails;
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
            console.log(data);
            // debugger
            localStorage.setItem("token",data.token)
            localStorage.setItem("userId",data.userId)
            console.log(localStorage.getItem("token","i am from .then in login page"))
        }).catch((err)=>{
            console.log(err)
        }).finally()
        navigate("/posts")
    }
    return(
        <>
            <p>i am from signin page</p>
            <h3>Signin</h3>
            <form>
                <div>
                    <label htmlFor="userid">UserId</label>
                    <input type={"gmail"} id="userid" onChange={(event)=>{setUserId(event.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type={"password"} id="password" onChange={(event)=>{setPassword(event.target.value)}}></input>
                </div>
                <button onClick={loginHandling}>Login</button>
                <button><Link to={"/signup"}>Signup</Link></button>
                
            </form>
        </>

    )
}
export default Signin;