import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyDetail from "./Pages/PropertyInfo";
import BasicInfo from "./Pages/BasicInfo";
import LocationInfo from "./Pages/LocationInfo";
import GeneralInfo from "./Pages/GeneralInfo";
import { multiStepContext } from "./Context";


const Addnewproperty=()=>
{
  
    return(
        <>
        <div className="Info-Block">
<div className="reactanle-360">
<div className="Rectangle-299 "></div>
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
  </div>
        </div>
        
        </>
    )



}
export default Addnewproperty