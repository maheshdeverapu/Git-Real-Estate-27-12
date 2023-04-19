import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "../others/sideNav";
import MainHeader from "../others/mainHeader";
import "./property-details.css";

const PropertyDetails = ({ setAddProperty, addProperties }) => {
  const [pageAddPropertyVal, setPageAddPropertyVal] = useState(false);
  const [usenavigateTwo, setusenavigateTwo] = useState(false);
  const navigate = useNavigate();
  const { length, breath, area, areaUnit, noOfBhk, noOfFloor, attached, westernToilet, furnished, carParking, lift, electricity, facing } = addProperties;
  const propertyPageHandle = (e) => {
    e.preventDefault();
    setPageAddPropertyVal(false);
    if (!addProperties.length || !addProperties.breath || !addProperties.area || !addProperties.areaUnit || !addProperties.noOfBhk || !addProperties.noOfFloor || !addProperties.attached || !addProperties.westernToilet || !addProperties.furnished || !addProperties.carParking || !addProperties.lift || !addProperties.electricity || !addProperties.facing) {
      return setPageAddPropertyVal(true);
    }
    setusenavigateTwo(true);
  }
  useEffect(() => {
    if (usenavigateTwo) {
      navigate("/generalInfo");
    }
  }, [usenavigateTwo])
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
        {pageAddPropertyVal ? <p className="emptyAlert">Please enter all fields</p> : ""}
        <form className="form">
          <div className="column_main">
            <div className="column_one">
              <div>
                <label htmlFor="length">Length(in ft)</label>
                <input
                  className="column_one_child"
                  type={"number"}
                  id="length"
                  value={length}
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
                  value={breath}
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
                  value={area}
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
                  value={areaUnit}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      areaUnit: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Sq.meters">Sq.meters</option>
                  <option value="Sq.foot">Sq.foot</option>
                </select>
              </div>
              <div>
                <label htmlFor="no-of-bhk">Number of BHK</label>
                <select
                  className="column_one_child"
                  id="no-of-bhk"
                  name="no-of-bhk"
                  value={noOfBhk}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      noOfBhk: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                </select>
              </div>
              <div>
                <label htmlFor="no-of-floors">Number of Floors</label>
                <select
                  className="column_one_child"
                  id="no-of-floors"
                  name="no-of-floors"
                  value={noOfFloor}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      noOfFloor: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
                </div>
                <div className="column_two">
              <div>
                <label htmlFor="attached">Attached</label>
                <select
                  className="column_two_child"
                  id="attached"
                  name="attached"
                  value={attached}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      attached: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
              <div>
                <label htmlFor="wester-toilet">Wester Toilet</label>
                <select
                  className="column_two_child"
                  id="wester-toilet"
                  name="wester-toilet"
                  value={westernToilet}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      westernToilet: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
              <div>
                <label htmlFor="furnished">Furnished</label>
                <select
                  className="column_two_child"
                  id="furnished"
                  name="furnished"
                  value={furnished}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      furnished: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
              <div>
                <label htmlFor="car-parking">Car Parking</label>
                <select
                  className="column_two_child"
                  id="car-parking"
                  name="car-parking"
                  value={carParking}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      carParking: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
              <div>
                <label htmlFor="lift">Lift</label>
                <select
                  className="column_two_child"
                  id="lift"
                  name="lift"
                  value={lift}
                  onChange={(e) => {
                    setAddProperty({ ...addProperties, lift: e.target.value });
                  }}
                >
                  <option>select</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
              <div>
                <label htmlFor="electricity">Electricity(in Phase)</label>
                <input
                  className="column_two_child"
                  type={"number"}
                  id="electricity"
                  value={electricity}
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
                  value={facing}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      facing: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="North">North</option>
                  <option value="South">South</option>
                  <option value="East">East</option>
                  <option value="West">West</option>
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
            <button className="save_continue"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
              onClick={(e) => { propertyPageHandle(e) }}
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
