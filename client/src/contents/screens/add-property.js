
import BasicInfo from "./basic-info";
import GeneralInfo from "./general-info";
import Location from "./location-info";
import PropertyDetails from "./property-detail";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
const AddProperty =()=>{
    return(
        <>
        <Link to={"/basicInfo"}>Basic Info</Link>
        {/* <Link to={"/generalInfo"}>General Info</Link>
        <Link to={"/locationInfo"}>Location Info</Link>
        <Link to={"/propertyDetails"}>Property Details</Link> */}
        </>
    )
}
export default AddProperty;