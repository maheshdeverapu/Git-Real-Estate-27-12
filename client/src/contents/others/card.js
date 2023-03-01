import {useState} from "react";
import "./card.css";
const Card =({ele,i,imageOverlay,setImageOverlay,popup,setPopup,setImageUrl})=>{
    const [toggle,setToggle] = useState("unsold")
    const [otherDetails,setOtherDetails] = useState(false)
    const [basic,setBasic] = useState(true)
    const [property,setProperty] = useState(false)
    const [general,setGeneral] = useState(false)
    const [location,setLocation] = useState(false)
  
const funcHandle=()=>{
    setImageUrl(ele.photo)
    setPopup(true);
}
const basicInfoHandling=(e)=>{
    e.preventDefault();
    setBasic(true);
    setProperty(false);
    setGeneral(false);
    setLocation(false)
}
const propertyInfoHandling=(e)=>{
    e.preventDefault();
    setBasic(false);
    setProperty(true);
    setGeneral(false);
    setLocation(false)
}
const generalInfoHandling=(e)=>{
    e.preventDefault();
    setBasic(false);
    setProperty(false);
    setGeneral(true);
    setLocation(false)
}
const locationInfoHandling=(e)=>{
    e.preventDefault();
    setBasic(false);
    setProperty(false);
    setGeneral(false);
    setLocation(true)
}
 
    return(   
        <>
  <tr key={i}>
    <td>{ele.ppd_id}</td>
    <td><button className="image_content" onClick={()=>{funcHandle()}}><img src={ele.photo} alt="image" style={{"width":"50px"}}></img></button></td>
    
    <td>{ele.property}</td>
    <td>{ele.contact}</td>
    <td>{ele.area}</td>
    <td>views</td>
    <td><button key={i} onClick={()=>{setToggle("sold")}}>{toggle}</button></td>
    <td>23</td>
    <td><i onClick={()=>{setOtherDetails(!otherDetails)}} class="fa-solid fa-eye"></i></td>
  </tr>   
  {otherDetails?
  <tr>
    <td colspan={7} className="full_property_data">
    
   
                    <div className="inner_content" >
                    <div className="side_nav_inner">
                        <button onClick={(e)=>{basicInfoHandling(e)}}><i class="fa-solid fa-user"></i>Basic Information</button>
                    <button onClick={(e)=>{propertyInfoHandling(e)}}><i class="fa-solid fa-house-chimney"></i>Property Details</button>
                        <button onClick={(e)=>{generalInfoHandling(e)}}><i class="fa-solid fa-lightbulb"></i>General Information</button>
                    <button onClick={(e)=>{locationInfoHandling(e)}}><i class="fa-solid fa-location-dot"></i>Location Information</button>
                    
                    </div>
                    <div>
                        {basic?
                    <div className="additional_info">
                        <h3>Basic Information</h3>
                        <p>Posted By : {ele.postedBy}</p>
                        <p>Negotable : {ele.negotable}</p>
                        <p>Price : {ele.price}</p>
                        <p>Ownership : {ele.ownership}</p>
                        <p>Property Age : {ele.propertyAge}</p>
                        <p>Property Approved : {ele.propertyApproved}</p>
                        <p>Property Description : {ele.propertyDescription}</p>
                        <p>BankLoan : {ele.bankLoan}</p>
                    </div>
                        :""}
                        {property?
                    <div className="additional_info">
                    <h3>Property Details</h3>
                    <p>Length : {ele.length}</p>
                    <p>Breath : {ele.breath}</p>
                    <p>Total Area : {ele.area}</p>
                    <p>Area Unit : {ele.areaUnit}</p>
                    <p>Bhk : {ele.noOfBhk}</p>
                    <p>No Of Floors : {ele.noOfFloor}</p>
                    <p>Attached : {ele.attached}</p>
                    <p>Western Toilet : {ele.westernToilet}</p>
                    <p>Furnished : {ele.furnished}</p>
                    <p>Car Parking : {ele.carParking}</p>
                    <p>Lift : {ele.lift}</p>
                    <p>Electricity : {ele.electricity}</p>
                    <p>Facing : {ele.facing}</p>
                    </div>
                    :""}
                    {general?
                    <div className="additional_info">
                        <h3>General Information</h3>
                    <p>Property Owner : {ele.propertyOwner}</p>
                    <p>Contact : {ele.contact}</p>
                    <p>Sale Type : {ele.saleType}</p>
                    <p>Featured Package : {ele.featuredPackage}</p>
                    <p>PPDPackage : {ele.PPDPackage}</p>
                    
                    </div>
                    :""}
                    {location?
                    <div className="additional_info">
                    <h3>Location Information</h3>
                        <p>Address : {ele.address}</p>
                        <p>City : {ele.city}</p>
                        <p>Contact : {ele.contact}</p>
                        <p>Email : {ele.email}</p>
                        <p>Landmark : {ele.landmark}</p>
                        <p>Latitude : {ele.latitude}</p>  
                        <p>Longitude : {ele.longitude}</p>
                        <p>Location Area : {ele.locationArea}</p>
                        <p>Pincode : {ele.pincode}</p>                   
                        <p>PPD_id : {ele.ppd_id}</p>
                        <p>Property : {ele.property}</p>
                        <p>Negotable : {ele.negotable}</p>
                        <p>Status : {ele.status}</p>
                        <p>Views : {ele.views}</p>
                    </div>
                    :""}
                    </div>
                   
                    </div>
                    </td></tr>
                :""}  
    
        </>   
    )
}
export default Card;