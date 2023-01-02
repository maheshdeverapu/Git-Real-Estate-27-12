import {Link} from "react-router-dom";
import AddProperty from "./add-property";
const LocationInfo = ()=>{
    return(
        <>  
             {/* <AddProperty/> */}
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type={"email"} id="email"></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <select id="city" name="city">
                         <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="area">Area</label>
                    <select id="area" name="area">
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pincode">Pincode</label>
                    <select id="pincode" name="pincode">
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <select id="address" name="address">
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="landmark">Landmark</label>
                    <select id="landmark" name="landmark">
                        <option>select</option> 
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="latitude">Latitude</label>
                    <input type={"number"} id="latitude"></input>
                </div>
                <div>
                    <label htmlFor="longitude">Longitude</label>
                    <input type={"number"} id="longitude"></input>
                </div>
                <button><Link to={"/generalInfo"}>Previous</Link></button>
                <button>Add Property</button>
            </form>
        </>
    )
}
export default LocationInfo;