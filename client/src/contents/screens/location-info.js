import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import AddProperty from "./add-property";
import SideNav from "../others/sideNav";
import MainHeader from "../others/mainHeader";
import "./location-info.css";
const LocationInfo = ({setAddProperty,addProperties,setFinaldatas,dataHandling,finalHandling})=>{
    const [pageLocationVal,setPageLocationVal] = useState(false);
    const navigate = useNavigate();
    const locationhandle = (e)=>{
        e.preventDefault();
        setPageLocationVal(false);
        if(!addProperties.email || !addProperties.city || !addProperties.locationArea || !addProperties.pincode || !addProperties.address || !addProperties.landmark || !addProperties.latitude || !addProperties.longitude){
        //  return setPageLocationVal(true);
        }
        dataHandling();
    }

    return( 
            <div className="home">
      <SideNav />
      <div className="main_home">
        <MainHeader />
        <h2 className="addNewProperty">Add New Property</h2>
        <div className="sub_header">
          <h3>
            <span>1</span>Basic Info
          </h3>
          <h3>
            <span>2</span>Property Details
          </h3>
          <h3>
            <span>3</span>General Info
          </h3>
          <h3 className="location_info">
            <span>4</span>Location Info
          </h3>
        </div>


        {pageLocationVal?<p className="emptyAlert">Please enter all fields</p>:""}

            <form className="form">
            <div className="column_main">
            <div className="column_one">
                <div>
                    <label htmlFor="email">Email</label>
                    <input className="column_one_child" type={"email"} id="email" onChange={(e)=>{setAddProperty({...addProperties,email:e.target.value})}}></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <select className="column_one_child" id="city" name="city" onChange={(e)=>{setAddProperty({...addProperties,city:e.target.value})}}>
                         <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="area">Area</label>
                    <select className="column_one_child" id="area" name="area" onChange={(e)=>{setAddProperty({...addProperties,locationArea:e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pincode">Pincode</label>
                    <select className="column_one_child" id="pincode" name="pincode" onChange={(e)=>{setAddProperty({...addProperties,pincode:e.target.value})}}>
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                </div>
                <div className="column_two">
                <div>
                    <label htmlFor="address">Address</label>
                    <select className="column_two_child" id="address" name="address" onChange={(e)=>{setAddProperty({...addProperties,address:e.target.value})}}>
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="landmark">Landmark</label>
                    <select className="column_two_child" id="landmark" name="landmark" onChange={(e)=>{setAddProperty({...addProperties,landmark:e.target.value})}}>
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="latitude">Latitude</label>
                    <input className="column_two_child" type={"text"} id="latitude" onChange={(e)=>{setAddProperty({...addProperties,latitude:e.target.value})}}></input>
                </div>
                <div>
                    <label htmlFor="longitude">Longitude</label>
                    <input className="column_two_child" type={"text"} id="longitude" onChange={(e)=>{setAddProperty({...addProperties,longitude:e.target.value})}}></input>
                </div>
                    </div>
                    </div>
                <div className="buttons">
                <Link className="cancel" style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }} to={"/generalInfo"}>Previous</Link>
                <button  className="save_continue" onClick={(e)=>{locationhandle(e)}}>Add Property</button>
                </div>
            </form>
                </div>
        </div>
    )
}
export default LocationInfo;