import React, { useContext } from "react"
import { Link } from "react-router-dom/dist"
import { multiStepContext } from "../components/context"



const BasicInfo=()=>{

const {userData, setUserData} = useContext(multiStepContext)

    return(

        <div id="container">
      <div>

      
          PROPERTY TYPE:
       <br/>
            <select value={userData["property"]} onChange={(e)=> setUserData({...userData, "property":e.target.value })}>
                <option>Select option</option>
                <option>Plot</option>
                <option>House</option>
                <option>Flat</option>
            </select>
            </div>

            <div>
                Price
                <input value={userData["price"]} onChange={(e)=> setUserData({...userData, "price":e.target.value })} type="number"></input>
            </div>
            <div>
                Property Age
                <input value={userData["propertyAge"]} onChange={(e)=> setUserData({...userData, "propertyAge":e.target.value })} type="number"></input>
            </div>
            <div>
                Property Description
                <input value={userData["propertyDescription"]} onChange={(e)=> setUserData({...userData, "propertyDescription":e.target.value })} type="text"></input>
            </div>

            <div>
            Negotable:
       <br/>
            <select value={userData["Negotable"]} onChange={(e)=> setUserData({...userData, "Negotable":e.target.value })}>
                <option>Select option</option>
                <option>Yes</option>
                <option>No</option>
             
            </select>
            </div>

<br />

          <button>Cancel</button>

        <Link to='/propertydetail'> <button>Save & Continue</button></Link>
        
        </div>





    )
}
export default BasicInfo