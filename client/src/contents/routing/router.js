
import Signin from '../athentication-pages/login-page';
import Signup from '../athentication-pages/signup-page';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralInfo from '../screens/general-info';
import PropertyDetails from '../screens/property-detail';
import AddProperty from '../screens/add-property';
import LocationInfo from '../screens/location-info';
import {Link, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import GetAll from '../screens/getAll';
import Search from '../others/search';
import { useNavigate } from 'react-router-dom';
import BasicInfo from '../screens/basic-info';
import { useState } from "react";
const Router =()=>{

    const navigate = useNavigate();
    useEffect(()=>{
      const user = localStorage.getItem("user")
      // console.log(user)
      if(!user){
        navigate("/signin")
      }
      
    
    },[])
        const [addProperties, setAddProperty] = useState({});
        const [url,setUrl] = useState("");
      //  const [image, setImage] = useState("");
      //  const [url,setUrl] = useState("");
    // console.log(finaldatas)
    // export default ContentAdd;
    // useEffect(()=>{
      // if(finaldatas !== {}){
        useEffect(()=>{
          setAddProperty({...addProperties,"photo":url})
        },[url])

      const dataHandling=()=>{

        debugger
        // if(url){
        //   setAddProperty({...addProperties,"photo":url})
        // }
      fetch("/createPost",{
        method:"post",
        headers:{
          "Content-Type" : "application/json",
          "Authorization": localStorage.getItem("token")                
        },
        body:JSON.stringify(addProperties)
      }).then(res=>res.json()).then((data)=>{
        // console.log(localStorage.getItem("token"),"i am from .then in login page")
        // debugger
        // if(data.status == 'Failed'){
          debugger
            console.log("data in final .then",data)
            // navigate("/signin")
            // return
        // }
      }).catch((err)=>{
        console.log(err)
      })
      navigate("/getId")
      setAddProperty({})
      // debugger;
    // },[finaldatas])
      
      }

      // const finalHandling =()=>{
      // console.log(image)
      //   // debugger
      // const data = new FormData()
      // data.append("file",image)
      // data.append("upload_preset","real-Estate-image")
      // data.append("cloud_name","dcfqb1dtn")
      // fetch("https://api.cloudinary.com/v1_1/dcfqb1dtn/image/upload",{
      //   method:"post",
      //   body:data
      // }).then(res=>res.json())
      // .then((data)=>{
      //   // debugger
      //   setUrl(data.url)
      //   // setAddProperty({...addProperties,"photo":data.secure_url})
      //   // setUrl(data.secure_url);
      //   // console.log(dat);

      //   // debugger
      // }).catch(err=>console.log(err))
      // dataHandling();



      // }
    return(
      <>
       
         <Routes>
      <Route path='/signup' element={ <Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
  
  
            <Route path='/basicInfo' element={<BasicInfo addProperties={addProperties} setAddProperty={setAddProperty}/>}/>
            <Route path='/generalInfo' element={<GeneralInfo addProperties={addProperties} setAddProperty={setAddProperty} setUrl={setUrl} />}/>
            <Route path='/propertyDetails' element={<PropertyDetails addProperties={addProperties} setAddProperty={setAddProperty}/>}/>
            <Route path='/locationInfo' element={<LocationInfo addProperties={addProperties} setAddProperty={setAddProperty}  dataHandling={dataHandling}/>}/>
            <Route path='/info' element={<AddProperty/>}/>
            <Route path='/home' element={<GetAll/>}/>
            <Route path='/getId' element={<Search/>}/>
        
            </Routes>
           
      </>
    )
  }
  
  export default Router
  {/* <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")}  to="/basicInfo" >Basic info</NavLink>
<NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/propertyDetails">Property Detail</NavLink>
<NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/generalInfo">General Info</NavLink>
<NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/locationInfo">Location Info</NavLink> */}