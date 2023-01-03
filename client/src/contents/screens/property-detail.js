import {Link} from "react-router-dom";
import AddProperty from "./add-property";
const PropertyDetails = ({setAddProperty,addProperties})=>{
    return (
        <>
             {/* <AddProperty/> */}
            <h2>PropertyDetails</h2>
            <form>
               
              
                <div>
                    <label htmlFor="length">Length(in ft)</label>
                    <input type={"number"} id="length" onChange={(e)=>{setAddProperty({...addProperties,"length":parseInt(e.target.value)})}}></input>
                </div>
                <div>
                    <label htmlFor="breath">Breath(in ft)</label>
                    <input type={"number"} id="breath" onChange={(e)=>{setAddProperty({...addProperties,"breath":parseInt(e.target.value)})}}></input>
                </div>
                <div>
                    <label htmlFor="total-area">Total-area(in sq.ft)</label>
                    <input type={"number"} id="total-area" onChange={(e)=>{setAddProperty({...addProperties,"area":parseInt(e.target.value)})}}></input>
                </div>
                <div>
                    <label htmlFor="area-unit">Area Unit</label>
                    <select id="area-unit" name="area-unit" onChange={(e)=>{setAddProperty({...addProperties,"areaUnit":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="no-of-bhk">Number of BHK</label>
                    <select id="no-of-bhk" name="no-of-bhk" onChange={(e)=>{setAddProperty({...addProperties,"noOfBhk":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="no-of-floors">Number of Floors</label>
                    <select id="no-of-floors" name="no-of-floors" onChange={(e)=>{setAddProperty({...addProperties,"noOfFloor":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="attached">Attached</label>
                    <select id="attached" name="attached" onChange={(e)=>{setAddProperty({...addProperties,"attached":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="wester-toilet">Wester Toilet</label>
                    <select id="wester-toilet" name="wester-toilet" onChange={(e)=>{setAddProperty({...addProperties,"westernToilet":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="furnished">Furnished</label>
                    <select id="furnished" name="furnished" onChange={(e)=>{setAddProperty({...addProperties,"furnished":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="car-parking">Car Parking</label>
                    <select id="car-parking" name="car-parking" onChange={(e)=>{setAddProperty({...addProperties,"carParking":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lift">Lift</label>
                    <select id="lift" name="lift" onChange={(e)=>{setAddProperty({...addProperties,"lift":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="electricity">Electricity(in Phase)</label>
                    <input type={"number"} id="electricity" onChange={(e)=>{setAddProperty({...addProperties,"electricity":parseInt(e.target.value)})}}></input>
                </div>
                <div>
                    <label htmlFor="facing">Facing</label>
                    <select id="facing" name="facing" onChange={(e)=>{setAddProperty({...addProperties,"facing":e.target.value})}}>
                        <option>select</option>
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