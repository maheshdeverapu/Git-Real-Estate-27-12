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
    const [popUp,setPopup] = useState("");

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
            // setPopup(data.message)
            console.log(data,data.error)
            if(data){
            M.toast({html: 'I am a toast!'})
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
        <div className={"signup-page"}>
            {/* <p >Logo</p> */}
            <div className="signup-content">
            <img className="signup-logo" src="https://media.istockphoto.com/id/1217096485/vector/geometric-logo-related-to-property-real-estate-agent-or-construction.jpg?s=612x612&w=0&k=20&c=ZdnrJ4sTVP3XwOrCzBHlbmclDVGtvXJwmQpImjkCM3Q="></img>
            <p className="signup-details">create new accout</p>
            <form className="s">
            {/* <h3 className="signup-he"ader">Signup</h3> */}
                <div >
                    {/* <label htmlFor={"userid"}>UserId</label> */}
                    <input className="signup-mail" type={"email"} id={"userid"} placeholder={"MailID"} onChange={(event)=>{setUserId(event.target.value)}}></input>
                </div >
                <div >
                    {/* <label htmlFor={"password"}>Password</label> */}
                    <input className="signup-password" type={"password"} id={"password"} placeholder={"PASSWORD"} onChange={(event)=>{setPassword(event.target.value)}}></input>
                </div>
                <div >
                    {/* <label htmlFor={"confirm-password"}>Confirm Password</label> */}
                    <input className="signup-confirm-password" type={"password"} id={"confirm-password"} placeholder={"CONFIRM PASSWORD"} onChange={(event)=>{setConfirm_password(event.target.value)}}></input>
                </div>
                <button  className="signup-submit" onClick={signupHandling}>Signup</button>
                {popUp && (
                    <>
                    <div>{popUp}</div>
                    <button inClick={()=>{setPopup("")}}>ok</button>
                    </>
                )}
            </form>
            </div>
        </div>

    )
}
export default Signup;
//<Link to={"/signin"}>Signup</Link>
//onChange={(event)=>{setSignupDetails({...signupDetails,userId:event.target.value})}}