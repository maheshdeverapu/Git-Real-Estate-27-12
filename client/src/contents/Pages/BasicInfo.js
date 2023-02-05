import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/dist";
import SearchHome from "../others/searchHome";
import SideNav from "../others/sideNav";
import MainHeader from "../others/mainHeader";

const BasicInfo = () => {
  const [userData, setUserData] = useState({
    price: "",
  });
  const handleChange = (e) => {
    const newData = { ...userData };
    newData[e.target.id] = e.target.value;
    setUserData(newData);
    console.log(newData);
  };

  return (
    <div className="home">
      <SideNav />
      <div className="main_home">
        <MainHeader />
        <div id="container">
          <div>
            PROPERTY TYPE:
            <br />
            <select
              value={userData["property"]}
              onChange={(e) =>
                setUserData({ ...userData, property: e.target.value })
              }
            >
              <option>Select option</option>
              <option>Plot</option>
              <option>House</option>
              <option>Flat</option>
            </select>
          </div>

          <div>
            Price
            <input
              id="price"
              value={userData.price}
              onChange={(e) => handleChange(e)}
              type="number"
            ></input>
          </div>
          <div>
            Property Age
            <input
              value={userData["propertyAge"]}
              onChange={(e) =>
                setUserData({ ...userData, propertyAge: e.target.value })
              }
              type="number"
            ></input>
          </div>
          <div>
            Property Description
            <input
              value={userData["propertyDescription"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  propertyDescription: e.target.value,
                })
              }
              type="text"
            ></input>
          </div>

          <div>
            Negotable:
            <br />
            <select
              value={userData["Negotable"]}
              onChange={(e) =>
                setUserData({ ...userData, Negotable: e.target.value })
              }
            >
              <option>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <br />

          <button>Cancel</button>

          <Link to="/propertydetail">
            {" "}
            <button>Save & Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;
