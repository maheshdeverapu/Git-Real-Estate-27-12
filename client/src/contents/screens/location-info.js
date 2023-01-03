import {Link} from "react-router-dom";
import AddProperty from "./add-property";
const LocationInfo = ({setAddProperty,addProperties,setFinaldatas,dataHandling,finalHandling})=>{
    return(
        <>  
             {/* <AddProperty/> */}
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type={"email"} id="email" onChange={(e)=>{setAddProperty({...addProperties,"email":e.target.value})}}></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <select id="city" name="city" onChange={(e)=>{setAddProperty({...addProperties,"city":e.target.value})}}>
                         <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="area">Area</label>
                    <select id="area" name="area" onChange={(e)=>{setAddProperty({...addProperties,"locationArea":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pincode">Pincode</label>
                    <select id="pincode" name="pincode" onChange={(e)=>{setAddProperty({...addProperties,"pincode":e.target.value})}}>
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <select id="address" name="address" onChange={(e)=>{setAddProperty({...addProperties,"address":e.target.value})}}>
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="landmark">Landmark</label>
                    <select id="landmark" name="landmark" onChange={(e)=>{setAddProperty({...addProperties,"landmark":e.target.value})}}>
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="latitude">Latitude</label>
                    <input type={"text"} id="latitude" onChange={(e)=>{setAddProperty({...addProperties,"latitude":e.target.value})}}></input>
                </div>
                <div>
                    <label htmlFor="longitude">Longitude</label>
                    <input type={"text"} id="longitude" onChange={(e)=>{setAddProperty({...addProperties,"longitude":e.target.value})}}></input>
                </div>
                <button><Link to={"/generalInfo"}>Previous</Link></button>
                <button onClick={dataHandling}>Add Property</button>
            </form>
        </>
    )
}
export default LocationInfo;