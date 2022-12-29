import React, { useContext } from "react"
import { Link } from "react-router-dom/dist"
import { multiStepContext } from "./../Context"
const GeneralInfo=()=>{

  const {userData, setUserData} = useContext(multiStepContext)

    return(

        <>
          <div>
            Name
            <br></br>
            <select className="box-structure" value={userData["name"]} onChange={(e)=> setUserData({...userData, "name":e.target.value })}>
              <option>Owner</option>
             
            </select>
          </div>

          <div>
            Sale Type
            <br />
            <select className="box-structure" value={userData["saleType"]} onChange={(e)=> setUserData({...userData, "saleType":e.target.value })}>
              <option>Select</option>
              <option>Standard Sale</option>
              <option>Bank Owned</option>
             
            </select>
          </div>
          
          <div>
          Mobile
            <br />
            <input className="box-structure" value={userData["mobile"]} onChange={(e)=> setUserData({...userData, "mobile":e.target.value })} type="number"></input>
          </div>
          <div>
          <Link to="/propertydetail"> <button className="previouse" >Previous</button></Link>
          
          <Link to="/locationinfo">
            
            <button  className="save">Save & Continue</button>
          </Link>
          </div>
        </>
    )
}
export default GeneralInfo