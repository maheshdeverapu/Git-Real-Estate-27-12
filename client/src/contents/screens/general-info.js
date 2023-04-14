import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SideNav from "../others/sideNav";
import MainHeader from "../others/mainHeader";
import "./general-info.css";  
const GeneralInfo = ({ setAddProperty, addProperties, setUrl }) => {
  const [generalVal,setGeneralVal] =useState(false);
  const [usenavigateThree,setusenavigateThree] = useState(false);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const {propertyOwner, contact, postedBy, saleType, featuredPackage, PPDPackage,photo} = addProperties;
  const PageGeneralVal = (e)=>{
    e.preventDefault();
    setGeneralVal(false);
    if(!addProperties.propertyOwner || !addProperties.contact || !addProperties.postedBy || !addProperties.saleType || !addProperties.featuredPackage || !addProperties.PPDPackage){
      return setGeneralVal(true);
    }
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
    let selectImage = e.target.files[0];
    // setImage(e.target.files[0]);
   
    const data = await new FormData();
    data.append("file", selectImage);
    data.append("upload_preset", "real-Estate-image");
    data.append("cloud_name", "dcfqb1dtn");
    fetch("https://api.cloudinary.com/v1_1/dcfqb1dtn/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.secure_url);
        console.log(data.secure_url)
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
                  value={propertyOwner}
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
                  value={contact}
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
                  value={postedBy}
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
              <p>Upload photo</p>
              <label htmlFor="image" style={{"backgroundColor":"white","borderRadius":"30px"}}><img style={{"width":"100px","backgroundColor":"white"}} src="data:image/png;base64,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" alt="upload image"></img></label>
              <input
                // className="photo"
                id="image"
                type="file"
                // value={photo}
                onChange={(e) => {
                 handle(e)
                }}
                accept="image/png, image/jpeg, image/jpg"
                // style={{"display":"none"}}
              />
            </div>
            <div className="column_two">
              <div>
                <label htmlFor="sale-type">Sale Type</label>
                <select
                  className="column_two_child"
                  id="sale-type"
                  name="sale-type"
                  value={saleType}
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
                  value={featuredPackage}
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
                  value={PPDPackage}
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
