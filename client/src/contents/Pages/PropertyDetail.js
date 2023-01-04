import React, { useContext,useState } from "react"
import { Link } from "react-router-dom/dist"
import { multiStepContext } from "../components/context"
import BasicInfo from "./BasicInfo"
const PropertyDetail=()=>{

  // const {userData, setUserData} = useContext(multiStepContext)
  const [userData, setUserData]=useState({
    breadth:"",
    length:""
  
  })
  const handleChange=(e)=>
  {
    const newData= {...userData}
    newData[e.target.id]= e.target.value
    setUserData(newData)
    console.log(newData);
    
  }
    return (
      <>
        <div id="container">
          
            <div >
              Length
              <input id="length" value={userData.length} onChange={(e)=> handleChange(e)} type="number"></input>
            </div>


            <div>
              Breadth
              <input id="breadth" value={userData.breadth} onChange={(e)=> handleChange(e)}  type="number"></input>
            </div>


            <div>
              Total Area
              <input id="area" value={userData.area} onChange={(e)=> handleChange(e)} type="number"></input>
            </div>


            <div>
            No of BHK:
            <br />
            <select>
              <option id="bhk" value={userData.bhk} onChange={(e)=> handleChange(e)}>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>


          <div>
            Attached:
            <br />
            <select>
              <option id="attatched" value={userData.attatched} onChange={(e)=> handleChange(e)}>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>


          <div>
            Furnished:
            <br />
            <select>
              <option id="attatched" value={userData.attatched} onChange={(e)=> handleChange(e)}>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
<Link to="/basicinfo"> <button>Previous</button></Link>
          
          <Link to="/generalinfo">
            
            <button>Save & Continue</button>
          </Link>
        </div>
      </>
    );
}
export default PropertyDetail