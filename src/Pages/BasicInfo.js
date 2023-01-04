import React, { useContext } from "react";
import { Link } from "react-router-dom/dist";
import { multiStepContext } from "./../Context";
import "./../style/propertyinfo.css";

const BasicInfo = () => {
  const { userData, setUserData } = useContext(multiStepContext);

  return (
    <div id="container">
         
      <div>
        PROPERTY TYPE:
        <br />
        <select
          className="box-structure"
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
        Property Age
        <br></br>
        <input
          className="box-structure"
          value={userData["propertyAge"]}
          onChange={(e) =>
            setUserData({ ...userData, propertyAge: e.target.value })
          }
          type="number"
        ></input>
      </div>

      <div>
        Negotable:
        <br />
        <select
          className="box-structure"
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
      <div>
        Price
        <br></br>
        <input
          className="box-structure"
          value={userData["price"]}
          onChange={(e) => setUserData({ ...userData, price: e.target.value })}
          type="number"
        ></input>
      </div>
      <div>
        Property Approved
        <br></br>
        <select className="box-structure">
          <option>Select option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div>
        Property Description
        <br></br>
        <input
          className="box-structure"
          value={userData["propertyDescription"]}
          onChange={(e) =>
            setUserData({ ...userData, propertyDescription: e.target.value })
          }
          type="text"
        ></input>
      </div>
      <div>
        Ownership
        <br></br>
        <select className="box-structure">
          <option>Select option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div>
        Bank Loan
        <br></br>
        <select className="box-structure">
          <option>Select option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <button className="previouse">Cancel</button>

      <Link to="/propertydetail">
        {" "}
        <button className="save">Save & Continue</button>
      </Link>
    </div>
    
  );
};
export default BasicInfo;
