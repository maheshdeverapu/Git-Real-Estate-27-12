import { get } from "mongoose";
import React from "react";
import {useState, useEffect} from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NotificationContext } from "../context/createContext";

const GetAll = ()=>{
        const [state,setState] = useState([]);
        // const {setHomeContent,homeContent} = useContext(NotificationContext)
        const navigate = useNavigate();
        useEffect(()=>{
            if(!state){
        fetch("/posts",
        {method:"get",
        headers:{ 
            "Content-Type":"application/json",
            "Authorization":localStorage.getItem("token")
        }})
        .then((res)=>{return res.json()})
        .then((res)=>{
            
            setState(res.posts);

            // debugger
            console.log(res.posts,"i am from .then in getall")})
        .catch((err)=>{console.log(err,"i am from catch in getall")})
        .finally();
            }
        },[])

        const logoutHandling =()=>{
            localStorage.clear();
            navigate("/signin")
            // fetch("/posts",
            // {method:"get",
            // headers:{ 
            //     "Content-Type":"application/json",
            //     "Authorization":localStorage.getItem("token")
            // }})
            // .then((res)=>{return res.json()})
            // .then((res)=>{
                
            //     setState(res.posts);
    
            //     // debugger
            //     console.log(res.posts,"i am from .then in getall")})
            // .catch((err)=>{console.log(err,"i am from catch in getall")})
            // .finally();
        }
        return(
            <> 
           
            </>
        )
    }
    export default GetAll;
    
  //  {/* <div>i am posts</div>
   // <div>{ele}</div> */}
   // {/* <Card post={ele} /> */}
    // {state.map((ele,i)=>{
    //     return(
    //         <>  
                
    //             <div>i am posts</div>
    //             <div>{ele}</div>
    //             {/* <Card post={ele} key={i}/> */}
    //         </>
    //     )
    // })}


    // {state.map((ele,i)=>{
    //     return(
    //         <>  
   
    //             {/* <div>i am posts</div>
    //             <div>{ele}</div> */}
    //             <Card post={ele} key={i}/>
    //         </>
    //     )
    // })}