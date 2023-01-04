import React, {useContext, useState} from "react";
import Addnewproperty from "./Addproperty";
export const multiStepContext = React.createContext();
//import axios from 'axios'


const StepContext =  ()=>
{

const [userData, setUserData]= useState("")
 const [finalData, setfinalData]= useState([])


// const  submitData= async (e)=>
// {
//    e.preventDefault();
//      setfinalData(finalData=>[...finalData, userData])
    
// const postData= JSON.stringify(finalData)
//  console.log(postData, "outside");
 

//  try{

//     const response= await fetch('/post',
//     {
//         method: 'POST',
//         headers: {"Content-Type" : "application/json"},
//        body: JSON.stringify(
//         {
//             response
//         }
//        )
//     })
//        .then((res) => res.json())
        
//         .catch((error) => {
//           console.error('Error:', error);
//         });


//  }
//  catch(e){
//     console.error('Error:', e);
//  }
    
//    axios.post("http://localhost:3000/post/",(finalData)
//   )
//     .then((response) => {
        
//       console.log(response.data );
     
//     }).catch(
//         (error)=>{
//             console.log(error);
            
//         }
//     )




// function submitData(e)
// {
// e.preventDefault()
// axios.post("http://localhost:3000/post/",{
//    email:userData.email,
//    address:userData.address,
//    pincode :userData.pincode 
// })
// }
   


    return(


        <div>
            <multiStepContext.Provider value = {{userData,setUserData,finalData, setfinalData}} >

<Addnewproperty />

            </multiStepContext.Provider>
        </div>
    )
}
export default StepContext