import {useState} from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";
import "./signup.css"

const Signup = ()=>{
    // const [signupDetails,setSignupDetails] = useState({userId:"",password:"",confirm_password:""})
    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");
    const [confirm_password,setConfirm_password] = useState("");

    const navigate = useNavigate();
    const signupHandling = ()=>{
        // console.log(signupDetails)
        // const {userId,password,confirm_password} = signupDetails;
        console.log(userId,password,confirm_password)
        // debugger
        if(!userId || !password || !confirm_password){
            M.toast({html: 'please enter all fields'})
            return 
        }
        fetch("/signup",{
            method :"post",
            headers : {"Content-Type" : "application/json"},
            body:JSON.stringify({
                userId,
                password,
                confirm_password
            })
        }).then(res=>res.json()).then((data)=>{
            if(data){
            M.toast({html: 'I am a toast!'})
            console.log(data,data.error)
            }
            else{
            // debugger
            M.toast({html: 'successfully registered!'})
        }
    }).catch((err)=>{
        // debugger
        M.toast({html: err.message})
        console.log(err,"i am here")
    }).finally()
    navigate("/signin")


    }
    return(
        <>
            <p>i am from signup page</p>
            <form className="signup-page">
            <h3 className="signup-header">Signup</h3>
                <div>
                    <label htmlFor={"userid"}>UserId</label>
                    <input type={"email"} id={"userid"} onChange={(event)=>{setUserId(event.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} id={"password"} onChange={(event)=>{setPassword(event.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor={"confirm-password"}>Confirm Password</label>
                    <input type={"password"} id={"confirm-password"} onChange={(event)=>{setConfirm_password(event.target.value)}}></input>
                </div>
                <button onClick={signupHandling}>Signup</button>
                
            </form>
        </>

    )
}
export default Signup;
//<Link to={"/signin"}>Signup</Link>
//onChange={(event)=>{setSignupDetails({...signupDetails,userId:event.target.value})}}