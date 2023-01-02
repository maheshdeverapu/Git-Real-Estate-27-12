import {Link} from "react-router-dom";
import AddProperty from "./add-property";
const GeneralInfo = ()=>{
    return (
        <>
             {/* <AddProperty/> */}
            <h2>GeneralInfo</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <select id="name" name="propertyOwner">
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="property-type">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type={"number"} id="phoneNumber"></input>
                </div>
                <div>
                    <label htmlFor="postedBy">PostedBy</label>
                    <select id="postedBy" name="postedBy" placeholder="PostedBy">
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sale-type">Sale Type</label>
                    <select id="sale-type" name="sale-type" >
                        <option>select</option>
                        <option value="land">Land</option>
                        <option value="house">House</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="featured-package">Featured Package</label>
                    <select id="featured-package" name="featured-package" >
                        <option>select</option>
                        <option value="land">Land</option>
                        <option value="house">House</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="ppd-package">PPD Package</label>
                    <select id="ppd-package" name="ppd-package" >
                        <option>select</option>
                        <option value="land">Land</option>
                        <option value="house">House</option>
                    </select>
                </div>
                <button><Link to={"/propertyDetails"}>Previous</Link></button>
                <button><Link to={"/locationInfo"}>Save & Continue</Link></button>
            </form>
        </>
    )
}

export default GeneralInfo;