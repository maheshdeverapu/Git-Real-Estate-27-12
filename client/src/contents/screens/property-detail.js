import {Link} from "react-router-dom";
import AddProperty from "./add-property";
const PropertyDetails = ()=>{
    return (
        <>
             {/* <AddProperty/> */}
            <h2>PropertyDetails</h2>
            <form>
               
                <div>
                    <label htmlFor="length">Length(in ft)</label>
                    <input type={"number"} id="length"></input>
                </div>
                <div>
                    <label htmlFor="breath">Breath(in ft)</label>
                    <input type={"number"} id="breath"></input>
                </div>
                <div>
                    <label htmlFor="total-area">Total-area(in sq.ft)</label>
                    <input type={"number"} id="total-area"></input>
                </div>
                <div>
                    <label htmlFor="area-unit">Area Unit</label>
                    <select id="area-unit" name="area-unit">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="no-of-bhk">Number of BHK</label>
                    <select id="no-of-bhk" name="no-of-bhk">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="no-of-floors">Number of Floors</label>
                    <select id="no-of-floors" name="no-of-floors">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="attached">Attached</label>
                    <select id="attached" name="attached">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="wester-toilet">Wester Toilet</label>
                    <select id="wester-toilet" name="wester-toilet">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="furnished">Furnished</label>
                    <select id="furnished" name="furnished">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="car-parking">Car Parking</label>
                    <select id="car-parking" name="car-parking">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lift">Lift</label>
                    <select id="lift" name="lift">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="electricity">Electricity(in Phase)</label>
                    <input type={"number"} id="electricity"></input>
                </div>
                <div>
                    <label htmlFor="facing">Facing</label>
                    <select id="facing" name="facing">
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <button><Link to={"/basicInfo"}>Basic Info</Link></button>
                <button><Link to={"/generalInfo"}>Save & Continue</Link></button>
            </form>
        </>
    )
}

export default PropertyDetails;