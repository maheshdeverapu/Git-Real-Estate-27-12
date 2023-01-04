import React, { useContext, useState } from "react"
import { Link } from "react-router-dom/dist"
//import { multiStepContext } from "./../Context.js" 
import axios from 'axios'
const LocationInfo=()=>{
//  const {userData, setUserData, submitData} = useContext(multiStepContext)

const [userData, setUserData]=useState({
  email:"",
  address:"",
  pincode:""
})

function submitData(e)
{
e.preventDefault()
axios.post("http://localhost:5000/post/",{
   email:userData.email,
   address:userData.address,
   pincode :userData.pincode 
})
}

const handleChange=(e)=>
{
  const newData= {...userData}
  newData[e.target.id]= e.target.value
  setUserData(newData)
  console.log(newData);
  
}


    return(

        <>

        <form onSubmit={submitData} method="POST" >

       
        <div>
          {/* Email
            <br />
            <input value={userData["email"]} onChange={(e)=> setUserData({...userData, "email":e.target.value })} type="email"></input>
          </div>

          <div>
          Address
            <br />
            <input value={userData["address"]} onChange={(e)=> setUserData({...userData, "address":e.target.value })} type="text"></input>
          </div>

          <div>
          Pincode
            <br />
            <input value={userData["pincode"]} onChange={(e)=> setUserData({...userData, "pincode":e.target.value })} type="text"></input> */}
          
          Email
            <br />
            <input id="email" value={userData.email} onChange={(e)=> handleChange(e)} type="email"></input>
          </div>

          <div>
          Address
            <br />
            <input id="address" value={userData.address} onChange={(e)=> handleChange(e)} type="text"></input>
          </div>

          <div>
          Pincode
            <br />
            <input id="pincode" value={userData.pincode} onChange={(e)=> handleChange(e)} type="text"></input>
          
          
          
          
          
          </div>

          <div>
          <Link to="/generalinfo"> <button>Previous</button></Link>
            <button onClick={submitData} type="submit" >Add property</button>
         
          </div>
          </form>
        </>
    )
}
export default LocationInfo