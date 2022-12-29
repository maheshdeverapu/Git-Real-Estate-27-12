import React, { useContext } from "react"
import { Link } from "react-router-dom/dist"
import { multiStepContext } from "../components/context"
const PropertyDetail=()=>{

  const {userData, setUserData} = useContext(multiStepContext)

    return (
      <>
        <div id="container">
          
            <div >
              Length
              <input value={userData["length"]} onChange={(e)=> setUserData({...userData, "length":e.target.value })} type="number"></input>
            </div>


            <div>
              Breadth
              <input value={userData["breadth"]} onChange={(e)=> setUserData({...userData, "breadth":e.target.value })}  type="number"></input>
            </div>


            <div>
              Total Area
              <input value={userData["totalArea"]} onChange={(e)=> setUserData({...userData, "totalArea":e.target.value })} type="number"></input>
            </div>


            <div>
            No of BHK:
            <br />
            <select>
              <option value={userData["noOfBhk"]} onChange={(e)=> setUserData({...userData, "noOfBhk":e.target.value })}>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>


          <div>
            Attached:
            <br />
            <select>
              <option value={userData["attached"]} onChange={(e)=> setUserData({...userData, "attached":e.target.value })}>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>


          <div>
            Furnished:
            <br />
            <select>
              <option value={userData["furnished"]} onChange={(e)=> setUserData({...userData, "furnished":e.target.value })}>Select option</option>
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