
import React,{ useaddProperties } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";

// import { MultistepContext } from "../notificationPovider";
const BasicInfo = ({setAddProperty,addProperties})=>{
    // const [addProperties,setAddProperty] = useaddProperties({Name:"",Negotiable:"",Price:"",Ownership:"",PropertyAge:"",PropertyApproved:"",PropertyDescription:"",BankLoan:""})
    // debugger
    // const {setAddProperty} = useContext(MultistepContext)
    // console.log(props)
//    console.log(addProperties)
//    debugger
// console.log("props",props)
// debugger

// const {setAddProperty,addProperties, p} = props;  
// console.log("p",p,addProperties)
        // debugger
        // setAddProperty(addProperties)
        // console.log(x)
        // debugger

    // const basicInfoHandling =()=>{
    //     console.log(addProperties)
    //     // setAddProperty(addProperties)
    //     // setAddProperty(addProperties)
    //     // console.log(addProperties);
    //     // debugger
    // }
    return (
        <>
            {/* <addProperties/> */}
            <h2>BasicInfo</h2>
            <form>
               
                <div>
                    
                    <select onChange={(e)=>{setAddProperty({...addProperties,"property":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner" >Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="negotable">Negotable</label>
                    <select id="negotable" name="negotable"  onChange={(e)=>{setAddProperty({...addProperties,"negotable":e.target.value})}}>
                        <option>select</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type={"number"} id="price"  onChange={(e)=>{setAddProperty({...addProperties,"price":parseInt(e.target.value)})}}></input>
                </div>
                <div>
                    <label htmlFor="ownership">Ownership</label>
                    <select id="ownership" name="ownership"  onChange={(e)=>{setAddProperty({...addProperties,"ownership":e.target.value})}}>
                        <option>select</option>
                        <option value="Above 2 years"> Above 2 years</option>
                        <option value="Below 2 years">Below 2 years</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-age">Property-Age</label>
                    <select id="property-age" name="property-age"  onChange={(e)=>{setAddProperty({...addProperties,"propertyAge":e.target.value})}}>
                        <option>select</option>
                        <option value="Above 10 years">Above 10 years</option>
                        <option value="Below 10 years">Below 10 years</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-approved">Property Approved</label>
                    <select id="property-approved" name="property-approved"  onChange={(e)=>{setAddProperty({...addProperties,"propertyApproved":e.target.value})}}>
                        <option>select</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-description">Property Description</label>
                    <textarea id="property-description" name="description"  placeholder="description"  onChange={(e)=>{setAddProperty({...addProperties,"propertyDescription":e.target.value})}}></textarea>
                </div>
                <div>
                    <label htmlFor="bank-loan">Bank Loan</label>
                    <select id="bank-loan" name="bank-loan"  onChange={(e)=>{setAddProperty({...addProperties,"bankLoan":e.target.value})}}>
                        <option>select</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
                <button><Link to={"/getId"}>cancel</Link></button>
                <button ><Link to={"/propertyDetails"}>Save & Continue</Link></button>
            </form>
        </>
    )
}

export default BasicInfo;