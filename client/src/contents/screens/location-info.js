import { Link } from "react-router-dom";
import { useState } from "react";
import SideNav from "../others/sideNav";
import MainHeader from "../others/mainHeader";
import "./location-info.css";
const LocationInfo = ({
  setAddProperty,
  addProperties,
  dataHandling,
}) => {
  const [pageLocationVal, setPageLocationVal] = useState(false);
  const {
    email,
    city,
    locationArea,
    pincode,
    address,
    landmark,
    latitude,
    longitude,
  } = addProperties;
  const locationhandle = (e) => {
    e.preventDefault();
    setPageLocationVal(false);
    if (
      (!addProperties.email,
        !addProperties.city ||
        !addProperties.locationArea ||
        !addProperties.pincode ||
        !addProperties.address ||
        !addProperties.landmark ||
        !addProperties.latitude ||
        !addProperties.longitude)
    ) {
      return setPageLocationVal(true);
    }
    dataHandling();
  };

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

        {pageLocationVal ? (
          <p className="emptyAlert">Please enter all fields</p>
        ) : (
          ""
        )}
        <form className="form">
          <div className="column_main">
            <div className="column_one">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="column_one_child"
                  type={"email"}
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setAddProperty({ ...addProperties, email: e.target.value });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="city">City</label>
                <select
                  className="column_one_child"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => {
                    setAddProperty({ ...addProperties, city: e.target.value });
                  }}
                >
                  <option>select</option>
                  <option value="vizag">vizag</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Benguluru">Benguluru</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>
              <div>
                <label htmlFor="area">Area</label>
                <select
                  className="column_one_child"
                  id="area"
                  name="area"
                  value={locationArea}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      locationArea: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Less_than_10_Sq.mtrs">
                    Less than 10 Sq.mtrs
                  </option>
                  <option value="More_than_10_Sq.mtrs">
                    More than 10 Sq.mtrs
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="pincode">Pincode</label>
                <input
                  className="column_one_child"
                  type={"number"}
                  id="pincode"
                  value={pincode}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      pincode: e.target.value,
                    });
                  }}
                ></input>
              </div>
            </div>
            <div className="column_two">
              <div>
                <label htmlFor="address">Address</label>
                <input
                  className="column_two_child"
                  type={"text"}
                  id="address"
                  value={address}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      address: e.target.value,
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="landmark">Landmark</label>
                <input
                  className="column_two_child"
                  type={"text"}
                  id="landmark"
                  value={landmark}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      landmark: e.target.value,
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="latitude">Latitude</label>
                <input
                  className="column_two_child"
                  type={"text"}
                  id="latitude"
                  value={latitude}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      latitude: e.target.value,
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="longitude">Longitude</label>
                <input
                  className="column_two_child"
                  type={"text"}
                  id="longitude"
                  value={longitude}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      longitude: e.target.value,
                    });
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="buttons">
            <Link
              className="cancel"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
              to={"/generalInfo"}
            >
              Previous
            </Link>
            <button
              className="save_continue"
              onClick={(e) => {
                locationhandle(e);
              }}
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LocationInfo;
