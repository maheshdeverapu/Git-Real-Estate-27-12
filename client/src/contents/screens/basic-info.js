import AddProperty from "./add-property";
import { useState } from "react";
import {Link} from "react-router-dom";
const BasicInfo = ()=>{
    const [state,setState] = useState({Name:"",Negotiable:"",Price:"",Ownership:"",PropertyAge:"",PropertyApproved:"",PropertyDescription:"",BankLoan:""})
    const basicInfoHandling =()=>{
        console.log(state);
        debugger
    }
    return (
        <>
            {/* <AddProperty/> */}
            <h2>BasicInfo</h2>
            <form>
               
                <div>
                    <label htmlFor="property-type">Name</label>
                    <select id="property-type" name="property-type" onChange={(e)=>{setState({...state,Name:e.target.value})}}>
                        <option value="Owner" >Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="negotable">Negotable</label>
                    <select id="negotable" name="negotable" onChange={(e)=>{setState({...state,Negotiable:e.target.value})}}>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type={"number"} id="price" onChange={(e)=>{setState({...state,Price:e.target.value})}}></input>
                </div>
                <div>
                    <label htmlFor="ownership">Ownership</label>
                    <select id="ownership" name="ownership" onChange={(e)=>{setState({...state,Ownership:e.target.value})}}>
                        <option value="Above 2 years"> Above 2 years</option>
                        <option value="Below 2 years">Below 2 years</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-age">Property-Age</label>
                    <select id="property-age" name="property-age" onChange={(e)=>{setState({...state,PropertyAge:e.target.value})}}>
                        <option value="Above 10 years">Above 10 years</option>
                        <option value="Below 10 years">Below 10 years</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-approved">Property Approved</label>
                    <select id="property-approved" name="property-approved" onChange={(e)=>{setState({...state,PropertyApproved:e.target.value})}}>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-description">Property Description</label>
                    <textarea id="property-description" name="description" required placeholder="description" onChange={(e)=>{setState({...state,PropertyDescription:e.target.value})}}></textarea>
                </div>
                <div>
                    <label htmlFor="bank-loan">Bank Loan</label>
                    <select id="bank-loan" name="bank-loan" required onChange={(e)=>{setState({...state,BankLoan:e.target.value})}}>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
                <button><Link to={"/"}>cancel</Link></button>
                <button onClick={basicInfoHandling}><Link to={"/propertyDetails"}>Save & Continue</Link></button>
            </form>
        </>
    )
}

export default BasicInfo;