import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyDetail from "./Pages/PropertyInfo";
import BasicInfo from "./Pages/BasicInfo";
import LocationInfo from "./Pages/LocationInfo";
import GeneralInfo from "./Pages/GeneralInfo";
import "./style/addproperty.css";

import { multiStepContext } from "./Context";

const Addnewproperty = () => {
  return (
    <>
      <div className="Info-Block">
        
          <div className="side-bar">
            {/* <img src={logo} alt='logo'></img> */}
            <ul>
              <li>
                <span>Property</span>
              </li>
              <li>
                <span>Assistance</span>
              </li>
              <li>
                <span>Received Interest</span>
              </li>
              <li>
                <span>Sent Interest</span>
              </li>
              <li>
                <span>Property Views</span>
              </li>
              <li>
                <span>Tariff Plan</span>
              </li>
            </ul>
          </div>
    
        </div>

        <div className="reactanle-360">
          <div className="Rectangle-299 "></div>
          <BrowserRouter>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link,num"
              }
              to="/basicinfo"
            >
              {" "}
              <span className="num">1</span>Basic info
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/propertydetail"
            >
              <span className="num">2</span> Property Detail
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/generalinfo"
            >
              {" "}
              <span className="num">3</span>General Info
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/locationinfo"
            >
              <span className="num">4</span> Location Info
            </NavLink>

            <Routes>
              <Route path="/basicinfo" element={<BasicInfo />}></Route>
              <Route
                path="/propertydetail"
                element={<PropertyDetail />}
              ></Route>
              <Route path="/generalinfo" element={<GeneralInfo />}></Route>
              <Route path="/locationinfo" element={<LocationInfo />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      
    </>
  );
};
export default Addnewproperty;
