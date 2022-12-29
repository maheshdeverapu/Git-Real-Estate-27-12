import React from "react";
import { Link, NavLink } from "react-router-dom";
import BasicInfo from "../Pages/BasicInfo";
import PropertyDetail from "../Pages/PropertyDetail";
import GeneralInfo from "../Pages/GeneralInfo";
import LocationInfo from "../Pages/LocationInfo";
import "./../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { multiStepContext } from "./context";


const Addnewproperty=()=>
{








    return(
        <>


  <BrowserRouter>
  <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")}  to="/basicinfo" >Basic info</NavLink>
  <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/propertydetail">Property Detail</NavLink>
  <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/generalinfo">General Info</NavLink>
  <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/locationinfo">Location Info</NavLink>



  <Routes>
    <Route path="/basicinfo" element={<BasicInfo/>}></Route>
    <Route path="/propertydetail" element={<PropertyDetail/>}></Route>
    <Route path="/generalinfo" element={<GeneralInfo/>}></Route>
    <Route path="/locationinfo" element={<LocationInfo/>}></Route>
  </Routes>

  </BrowserRouter>  
         
        
        </>
    )



}
export default Addnewproperty