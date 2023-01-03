import { useState } from "react";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import AddProperty from "./add-property";
const GeneralInfo = ({setAddProperty,addProperties,setUrl})=>{
const [image,setImage] = useState("");
// const [url,setUrl] = useState("");
// useEffect(()=>{
// if(url){
//     setAddProperty({...addProperties,"photo":url})
// }
// },[url])

const handle = async(e)=>{
    e.preventDefault();
    console.log(image)
        // debugger
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","real-Estate-image")
      data.append("cloud_name","dcfqb1dtn")
      fetch("https://api.cloudinary.com/v1_1/dcfqb1dtn/image/upload",{
        method:"post",
        body:data
      }).then(res=>res.json())
      .then((data)=>{
        // debugger
        setUrl(data.url)
        // setAddProperty({...addProperties,"photo":data.secure_url})
        // setUrl(data.secure_url);
        // console.log(dat);

        // debugger
      }).catch(err=>console.log(err))
}

    return (
        <>
             {/* <AddProperty/> */}
            <h2>GeneralInfo</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <select id="name" name="propertyOwner"  onChange={(e)=>{setAddProperty({...addProperties,"propertyOwner":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="property-type">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" id="phoneNumber"  onChange={(e)=>{ setAddProperty({...addProperties,"contact":parseInt(e.target.value)})}}></input>
                </div>
                <div>
                    <label htmlFor="postedBy">PostedBy</label>
                    <select id="postedBy" name="postedBy" placeholder="PostedBy"  onChange={(e)=>{setAddProperty({...addProperties,"postedBy":e.target.value})}}>
                        <option>select</option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sale-type">Sale Type</label>
                    <select id="sale-type" name="sale-type"  onChange={(e)=>{setAddProperty({...addProperties,"saleType":e.target.value})}} >
                        <option>select</option>
                        <option value="land">Land</option>
                        <option value="house">House</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="featured-package">Featured Package</label>
                    <select id="featured-package" name="featured-package"   onChange={(e)=>{setAddProperty({...addProperties,"featuredPackage":e.target.value})}}>
                        <option>select</option>
                        <option value="land">Land</option>
                        <option value="house">House</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="ppd-package">PPD Package</label>
                    <select id="ppd-package" name="ppd-package"  onChange={(e)=>{setAddProperty({...addProperties,"PPDPackage":e.target.value})}} >
                        <option>select</option>
                        <option value="land">Land</option>
                        <option value="house">House</option>
                    </select>
                </div>
                <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} accept="image/png, image/jpeg, image/jpg"  />
                <button><Link to={"/propertyDetails"}>Previous</Link></button>
                <button onClick={(e)=>{handle(e)}}><Link to={"/locationInfo"}>Save & Continue</Link></button>
            </form>
        </>
    )
}

export default GeneralInfo;