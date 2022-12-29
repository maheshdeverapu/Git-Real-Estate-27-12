import React, { useContext } from "react"
import { Link } from "react-router-dom/dist"
import { multiStepContext } from "./../Context" 
const LocationInfo=()=>{
  const {userData, setUserData, submitData} = useContext(multiStepContext)


    return(

        <>
        <div>
          Email
            <br />
            <input className="box-structure" value={userData["email"]} onChange={(e)=> setUserData({...userData, "email":e.target.value })} type="email"></input>
          </div>

          <div>
          Address
            <br />
            <input className="box-structure" value={userData["address"]} onChange={(e)=> setUserData({...userData, "address":e.target.value })} type="text"></input>
          </div>

          <div>
          Pincode
            <br />
            <input className="box-structure" value={userData["pincode"]} onChange={(e)=> setUserData({...userData, "pincode":e.target.value })} type="text"></input>
          </div>

          <div>
          <Link to="/generalinfo"> <button className="previouse">Previous</button></Link>
            <button onClick={submitData}  className="save">Add property</button>
         
          </div>
        
        </>
    )
}
export default LocationInfo