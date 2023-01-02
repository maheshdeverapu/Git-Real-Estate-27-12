import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { NotificationContext } from "../context/createContext";
import { useNavigate, Link } from "react-router-dom";
const Search = () => {
  const [ppd_id, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  // const {data} = useContext(NotificationContext)

  // if(!ppd_id){
  //     const GetAll = ()=>{
  //         const [state,setState] = useState([]);

  //         useEffect(()=>{
  //         fetch("/posts",
  //         {method:"get",
  //         headers:{
  //             "Content-Type":"application/json",
  //             "Authorization":localStorage.getItem("token")
  //         }})
  //         .then((res)=>{return res.json()})
  //         .then((res)=>{

  //             setState(res.posts);

  //             // debugger
  //             console.log(res.posts,"i am from .then in getall")})
  //         .catch((err)=>{console.log(err,"i am from catch in getall")})
  //         .finally();
  //         },[])

  //         const logoutHandling =()=>{
  //             fetch("/posts",
  //             {method:"get",
  //             headers:{
  //                 "Content-Type":"application/json",
  //                 "Authorization":localStorage.getItem("token")
  //             }})
  //             .then((res)=>{return res.json()})
  //             .then((res)=>{

  //                 setState(res.posts);

  //                 // debugger
  //                 console.log(res.posts,"i am from .then in getall")})
  //             .catch((err)=>{console.log(err,"i am from catch in getall")})
  //             .finally();
  //         }
  //         return(
  //             <>
  //                 <Search/>
  //                 <button onClick={logoutHandling}>Logout</button>
  //                 <table>
  //                     <thead>
  //                             <tr>
  //                                 <th>PPD ID</th>
  //                                 <th>IMAGE</th>
  //                                 <th>PROPERTY</th>
  //                                 <th>CONTACT</th>
  //                                 <th>AREA</th>
  //                                 <th>VIEWS</th>
  //                                 <th>STATUS</th>
  //                                 <th>DAYS LEFT</th>
  //                                 <th>ACTION</th>
  //                             </tr>
  //                     </thead>
  //                     <tbody>
  //             {state.map((ele,i)=>{
  //                 return(
  //                     <tr key={i}>
  //                     {/* <div key={i}>   */}
  //                {/* <Card key={i} post={ele}/> */}
  //                <td>{ele.ppd_id}</td>
  //         <td>image</td>
  //         <td>{ele.property}</td>
  //         <td>{ele.contact}</td>
  //         <td>{ele.area}</td>
  //         <td>views</td>
  //         <td>unsold</td>
  //         <td>23</td>
  //         <td>action</td>

  //             {/* </div> */}
  //         </tr>
  //            )
  //         })}
  //         </tbody>

  //                 </table>

  //             </>
  //         )
  //     }
  // }
  // else{
      const navigate = useNavigate()
  useEffect(() => {
    // debugger
    fetch(`/getId?ppd_id=${ppd_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data",data.user)
        setPosts(data.user);
        // debugger
      })
      .catch((err) => {
        console.log("catch", err);
      })
      .finally();
  }, [ppd_id]);

  const logoutHandling =()=>{
    localStorage.clear();
    navigate("/signin")
}

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
  return (
    <>
      <div> i am from search</div>
      <input
        type={"text"}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      {/* <div>{posts[0]}</div> */}

      <button onClick={logoutHandling}>Logout</button>
      <button><Link to={"/basicInfo"}>Add Property</Link></button>
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
          {posts.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{ele.ppd_id}</td>
                <td>image</td>
                <td>{ele.property}</td>
                <td>{ele.contact}</td>
                <td>{ele.area}</td>
                <td>views</td>
                <td>unsold</td>
                <td>23</td>
                <td>action</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Search;
