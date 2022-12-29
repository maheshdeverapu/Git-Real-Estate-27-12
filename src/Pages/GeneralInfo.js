import React, { useContext } from "react"
import { Link } from "react-router-dom/dist"
import { multiStepContext } from "../components/context"
const GeneralInfo=()=>{

  const {userData, setUserData} = useContext(multiStepContext)

    return(

        <>
          <div>
            Name
            <br />
            <select value={userData["name"]} onChange={(e)=> setUserData({...userData, "name":e.target.value })}>
              <option>Owner</option>
             
            </select>
          </div>

          <div>
            Sale Type
            <br />
            <select value={userData["saleType"]} onChange={(e)=> setUserData({...userData, "saleType":e.target.value })}>
              <option>Select</option>
              <option>Standard Sale</option>
              <option>Bank Owned</option>
             
            </select>
          </div>
          
          <div>
          Mobile
            <br />
            <input value={userData["mobile"]} onChange={(e)=> setUserData({...userData, "mobile":e.target.value })} type="number"></input>
          </div>
          <div>
          <Link to="/propertydetail"> <button>Previous</button></Link>
          
          <Link to="/locationinfo">
            
            <button>Save & Continue</button>
          </Link>
          </div>
        </>
    )
}
export default GeneralInfo