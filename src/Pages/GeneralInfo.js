import React, { useContext, useState } from "react"
import { Link } from "react-router-dom/dist"
import { multiStepContext } from "../components/context"
import PropertyDetail from "./PropertyDetail"
const GeneralInfo=()=>{

  // const {userData, setUserData} = useContext(multiStepContext)

  const [userData, setUserData]=useState({
    name:""

  })

  const handleChange=(e)=>
  {
    const newData= {...userData}
    newData[e.target.id]= e.target.value
    setUserData(newData)
    console.log(newData); 
  }
    return(

        <>
          <div>
            Name
            <br />
            <select id="name" value={userData.attatched} onChange={(e)=> handleChange(e)}>
              <option>Owner</option>
             
            </select>
          </div>

          <div>
            Sale Type
            <br />
            <select value={userData["saleType"]} onChange={(e)=> setUserData({...userData, "saleType":e.target.value })}>
              <option></option>
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