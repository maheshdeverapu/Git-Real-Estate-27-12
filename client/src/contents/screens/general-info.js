import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AddProperty from "./add-property";
import SideNav from "../others/sideNav";
import MainHeader from "../others/mainHeader";
import "./general-info.css";  
const GeneralInfo = ({ setAddProperty, addProperties, setUrl }) => {
  const [generalVal,setGeneralVal] =useState(false);
  const [usenavigateThree,setusenavigateThree] = useState(false);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const PageGeneralVal = (e)=>{
    e.preventDefault();
    setGeneralVal(false);
    // if(!addProperties.propertyOwner || !addProperties.contact || !addProperties.postedBy || !addProperties.saleType || !addProperties.featuredPackage || !addProperties.PPDPackage){
    //   return setGeneralVal(true);
    // }
    setusenavigateThree(true);
    navigate("/locationInfo")
  }
  useEffect(()=>{
    if(usenavigateThree){
      navigate("/locationInfo");
    }
  },[usenavigateThree])

  const handle = async (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
    // console.log(e.target.files[0]);
    // debugger
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "real-Estate-image");
    data.append("cloud_name", "dcfqb1dtn");
    fetch("https://api.cloudinary.com/v1_1/dcfqb1dtn/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        // console.log(data.url)
      })
      .catch((err) => console.log(err));
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
          <h3 className="general_info">
            <span>3</span>General Info
          </h3>
          <h3>
            <span>4</span>Location Info
          </h3>
        </div>
        {generalVal?<p className="emptyAlert">Please enter all fields</p>:""}
        <form className="form">
          <div className="column_main">
            <div className="column_one">
              <div>
                <label htmlFor="name">Name</label>
                <select
                  className="column_one_child"
                  id="name"
                  name="propertyOwner"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      propertyOwner: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="property-type">Dealer</option>
                </select>
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  className="column_one_child"
                  type="number"
                  id="phoneNumber"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      contact: parseInt(e.target.value),
                    });
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="postedBy">PostedBy</label>
                <select
                  className="column_one_child"
                  id="postedBy"
                  name="postedBy"
                  placeholder="PostedBy"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      postedBy: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>

              <input
                className="photo"
                type="file"
                onChange={(e) => {
                 handle(e)
                }}
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
            <div className="column_two">
              <div>
                <label htmlFor="sale-type">Sale Type</label>
                <select
                  className="column_two_child"
                  id="sale-type"
                  name="sale-type"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      saleType: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="land">Land</option>
                  <option value="house">House</option>
                </select>
              </div>
              <div>
                <label htmlFor="featured-package">Featured Package</label>
                <select
                  className="column_two_child"
                  id="featured-package"
                  name="featured-package"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      featuredPackage: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="land">Land</option>
                  <option value="house">House</option>
                </select>
              </div>
              <div>
                <label htmlFor="ppd-package">PPD Package</label>
                <select
                  className="column_two_child"
                  id="ppd-package"
                  name="ppd-package"
                  onChange={(e) => {
                    setAddProperty({
                      ...addProperties,
                      PPDPackage: e.target.value,
                    });
                  }}
                >
                  <option>select</option>
                  <option value="land">Land</option>
                  <option value="house">House</option>
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
                to={"/propertyDetails"}
              >
                Previous
              </Link>
          
           
              {/* <Link className="save_continue" 
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
                to={"/locationInfo"}
              >
                Save & Continue
              </Link> */}
              <button className="save_continue" 
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
                onClick={(e)=>{PageGeneralVal(e)}}
              >
                Save & Continue
              </button>
        
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralInfo;
