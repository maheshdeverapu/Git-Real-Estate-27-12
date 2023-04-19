import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom/dist";
import SideNav from "../others/sideNav";
import MainHeader from "../others/mainHeader";
import { useNavigate } from "react-router-dom/dist";
import "./basic-info.css";

const BasicInfo = ({ setAddProperty, addProperties }) => {
  const navigate = useNavigate();
  const [pageBasicInfoVal,setPageBasicInfoVal] = useState(false);
  const [usenavigate,setusenavigate] = useState(false);
  const {property,negotable,price,ownership,propertyAge,propertyApproved,propertyDescription,bankLoan} = addProperties;
  const handle=(e)=>{
    e.preventDefault();
    setPageBasicInfoVal(true);
    if(!addProperties.property || !addProperties.negotable || !addProperties.price || !addProperties.ownership || !addProperties.propertyAge || !addProperties.propertyApproved || !addProperties.propertyDescription || !addProperties.bankLoan){
      return setPageBasicInfoVal(true);
    }
    setusenavigate(true); 
  }
  useEffect(()=>{
    if(usenavigate){
      navigate("/propertyDetails");
    }
  },[usenavigate])
  return (
    <div className="home">
      <SideNav />
      <div className="main_home">
        <MainHeader />
        <h2 className="addNewProperty">Add New Property</h2>
        <div className="sub_header">
          <h3 className="basic_info">
            <span>1</span>Basic Info
          </h3>
          <h3>
            <span>2</span>Property Details
          </h3>
          <h3>
            <span>3</span>General Info
          </h3>
          <h3>
            <span>4</span>Location Info
          </h3>
        </div>
        {pageBasicInfoVal?<p className="emptyAlert">Please enter all fields</p>:""}
        <form className="form">
          <div className="column_main">
            <div className="column_one">
              <div>
              <label htmlFor="postedBy">Posted By</label>
                <select
                 className="column_one_child"
                  id="postedBy"
                  value={property}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      property: e.target.value,
                    });                  
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="negotable">Negotable</label>
                <select
                 className="column_one_child"
                  id="negotable"
                  name="negotable"
                  value={negotable}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      negotable: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                 className="column_one_child"
                  type={"number"}
                  id="price"
                  value={price}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      price: parseInt(e.target.value),
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="ownership">Ownership</label>
                <select
                 className="column_one_child"
                  id="ownership"
                  name="ownership"
                  value={ownership}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      ownership: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Above 2 years"> Above 2 years</option>
                  <option value="Below 2 years">Below 2 years</option>
                </select>
              </div>
            </div>
            <div className="column_two">
              <div>
                <label htmlFor="property-age">Property-Age</label>
                <select
                 className="column_one_child"
                  id="property-age"
                  name="property-age"
                  value={propertyAge}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      propertyAge: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Above 10 years">Above 10 years</option>
                  <option value="Below 10 years">Below 10 years</option>
                </select>
              </div>
              <div>
                <label htmlFor="property-approved">Property Approved</label>
                <select
                 className="column_one_child"
                  id="property-approved"
                  name="property-approved"
                  value={propertyApproved}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      propertyApproved: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div>
                <label htmlFor="property-description">
                  Property Description
                </label>
                <textarea
                 className="column_one_child"
                  id="property-description"
                  name="description"
                  placeholder="description"
                  value={propertyDescription}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      propertyDescription: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div>
                <label htmlFor="bank-loan">Bank Loan</label>
                <select
                 className="column_one_child"
                  id="bank-loan"
                  name="bank-loan"
                  value={bankLoan}
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      bankLoan: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
            </div>
          </div>
          <div className="buttons">       
            <Link className="cancel" style={{"textDecoration":"none","color":"white","fontSize":"20px"}} to={"/getId"}>cancel</Link>        
            <button className="save_continue" style={{"textDecoration":"none","color":"white","fontSize":"20px"}} onClick={(e)=>{handle(e)}}>Save & Continue</button>         
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfo;
