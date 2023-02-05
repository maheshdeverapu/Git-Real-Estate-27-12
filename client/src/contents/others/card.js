import {useState} from "react";
import { Link } from "react-router-dom";
import Popup from "./popup";
import "./card.css";
const Card =({ele,i,imageOverlay,setImageOverlay,popup,setPopup,setImageUrl})=>{
    const [toggle,setToggle] = useState("unsold")
  
const funcHandle=()=>{
    setImageUrl(ele.photo)
    setPopup(true);
}

//             <a href="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg"  target="popup"  onclick="window.open('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;">
//     Open Popup
// </a>
 
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
    <td>action</td>
    {/* <td><FontAwesomeIcon icon="fa-solid fa-user" /></td> */}
  </tr>     
    
        </>   
    )
}
export default Card;