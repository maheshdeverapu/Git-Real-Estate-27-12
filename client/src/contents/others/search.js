import React from "react";
import { useState,useEffect } from "react";
const Search =()=>{
    const [ppd_id,setSearch] = useState("");
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        // debugger
        fetch(`/getId?ppd_id=${ppd_id}`,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json()).then((data)=>{
            console.log("data",data)
            setPosts(data);
            // debugger
    
        }).catch((err)=>{
            console.log("catch",err)
        }).finally()
    },[ppd_id])
    // const handleSearch = (value) => {
    //     setSearch(value);
    //     // console.log(ppd_id)
    //     // debugger
    //     fetch(`/getId?ppd_id=${ppd_id}`,{
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Authorization":localStorage.getItem("token")
    //     }
    // }).then(res=>res.json()).then((data)=>{
    //     console.log(ppd_id,"data",data)
    //     debugger

    // }).catch((err)=>{
    //     console.log("catch",err)
    // }).finally()
    // }
    return(
        <>
            <div> i am from search</div>
            <input type={"text"} onChange={(e)=>{setSearch(e.target.value)}}></input>
            {/* <button onClick={handleSearch}>submit</button> */}
        </>
    )
}
export default Search;
// {posts.map((ele,i)=>{
//     return(
//         <div key={i}>
//             {ele.ppd_id}
//         </div>
//     )
// })}