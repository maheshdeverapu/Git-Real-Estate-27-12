import { get } from "mongoose";
import React from "react";
import {useState, useEffect} from "react";
import Card from "./card";
import Search from "../others/search";
const GetAll = ()=>{
    const [state,setState] = useState([]);
        useEffect(()=>{
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
        },[])
        return(
            <> 
                <Search/>
                <table>
                    <thead>
                            <tr>
                                <th>PPD ID</th>
                                <th>IMAGE</th>
                                <th>PROPERTY</th>
                                <th>CONTACT</th>
                                <th>AREA</th>
                                <th>VIEWS</th>
                                <th>STATUS</th>
                                <th>DAYS LEFT</th>
                                <th>ACTION</th>
                            </tr>
                    </thead>                    
                    <tbody>  
            {state.map((ele,i)=>{
                return(       
                    <tr key={i}>           
                    {/* <div key={i}>   */}
               {/* <Card key={i} post={ele}/> */}
               <td>{ele.ppd_id}</td>
        <td>image</td>
        <td>{ele.property}</td>
        <td>{ele.contact}</td>
        <td>{ele.area}</td>
        <td>views</td>
        <td>unsold</td>
        <td>23</td>
        <td>action</td>
        
      
            {/* </div> */}
        </tr>
           )
        })}
        </tbody>
        
         
                </table>
            
                 
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