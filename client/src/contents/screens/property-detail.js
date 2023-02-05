import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProperty from "./add-property";
import SearchHome from "../others/searchHome";
import SideNav from "../others/sideNav";
import MainHeader from "../others/mainHeader";
import "./property-details.css";

const PropertyDetails = ({ setAddProperty, addProperties }) => {
  const [pageAddPropertyVal,setPageAddPropertyVal] = useState(false);
  const [usenavigateTwo,setusenavigateTwo] = useState(false);
  const navigate = useNavigate();
  const propertyPageHandle=(e)=>{
    e.preventDefault();
    setPageAddPropertyVal(false);
    // if(!addProperties.length || !addProperties.breath || !addProperties.area || !addProperties.areaUnit || !addProperties.noOfBhk || !addProperties.noOfFloor || !addProperties.attached || !addProperties.westernToilet || !addProperties.furnished || !addProperties.carParking || !addProperties.lift || !addProperties.electricity || !addProperties.facing){
    //   return setPageAddPropertyVal(true);
    // }
    setusenavigateTwo(true);
    // navigate("/generalInfo");
  }
  useEffect(()=>{
    if(usenavigateTwo){
      navigate("/generalInfo");
    }
  },[usenavigateTwo])
  return (
    <div className="home">
      <SideNav />
      <div className="main_home">
        <MainHeader />
        <h2 className="addNewProperty">Add New Property</h2>
        <div className="sub_header">
          <h3>
            <span>1</span>Basic Info
          </h3>
          <h3 className="property_details">
            <span>2</span>Property Details
          </h3>
          <h3>
            <span>3</span>General Info
          </h3>
          <h3>
            <span>4</span>Location Info
          </h3>
        </div>
        {pageAddPropertyVal?<p className="emptyAlert">Please enter all fields</p>:""}
        <form className="form">
          <div className="column_main">
            <div className="column_one">
              <div>
                <label htmlFor="length">Length(in ft)</label>
                <input
                  className="column_one_child"
                  type={"number"}
                  id="length"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      length: parseInt(e.target.value),
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="breath">Breath(in ft)</label>
                <input
                  className="column_one_child"
                  type={"number"}
                  id="breath"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      breath: parseInt(e.target.value),
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="total-area">Total-area(in sq.ft)</label>
                <input
                  className="column_one_child"
                  type={"number"}
                  id="total-area"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      area: parseInt(e.target.value),
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="area-unit">Area Unit</label>
                <select
                  className="column_one_child"
                  id="area-unit"
                  name="area-unit"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      areaUnit: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="no-of-bhk">Number of BHK</label>
                <select
                  className="column_one_child"
                  id="no-of-bhk"
                  name="no-of-bhk"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      noOfBhk: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="no-of-floors">Number of Floors</label>
                <select
                  className="column_one_child"
                  id="no-of-floors"
                  name="no-of-floors"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      noOfFloor: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="attached">Attached</label>
                <select
                  className="column_one_child"
                  id="attached"
                  name="attached"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      attached: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
            </div>
            <div className="column_two">
              <div>
                <label htmlFor="wester-toilet">Wester Toilet</label>
                <select
                  className="column_two_child"
                  id="wester-toilet"
                  name="wester-toilet"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      westernToilet: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="furnished">Furnished</label>
                <select
                  className="column_two_child"
                  id="furnished"
                  name="furnished"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      furnished: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="car-parking">Car Parking</label>
                <select
                  className="column_two_child"
                  id="car-parking"
                  name="car-parking"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      carParking: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="lift">Lift</label>
                <select
                  className="column_two_child"
                  id="lift"
                  name="lift"
                  onChange={(e) => {
                    setAddProperty({ ...addProperties, lift: e.target.value });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="electricity">Electricity(in Phase)</label>
                <input
                  className="column_two_child"
                  type={"number"}
                  id="electricity"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      electricity: parseInt(e.target.value),
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="facing">Facing</label>
                <select
                  className="column_two_child"
                  id="facing"
                  name="facing"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      facing: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
            </div>
          </div>
          <div className="buttons">
        
              <Link className="cancel"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
                to={"/basicInfo"}
              >
                Basic Info
              </Link>
     
   
              {/* <Link className="save_continue"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
                to={"/generalInfo"}
              >
                Save & Continue
              </Link> */}
              <button className="save_continue"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
                onClick={(e)=>{propertyPageHandle(e)}}
              >
                Save & Continue
              </button>
       
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
