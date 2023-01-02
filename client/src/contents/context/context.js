// import React, {useContext, useState} from "react";
// // import Addnewproperty from "./Addnewproperty";
// export const multiStepContext = React.createContext();
// // import axios from 'axios'


// const StepContext =()=>
// {

// const [userData, setUserData]= useState({
//     email:"",
//     address:"",
//     pincode:""
// })
// const [finalData, setfinalData]= useState([])

// function submitData()
// {
  
//      setfinalData(finalData=>[...finalData, userData])

//  console.log(finalData, "outside");
 

 
//     fetch('http://localhost:3000/post',
//     {
//         method: 'POST',
//         headers: {"Content-Type" : "application/json"},
//        body:JSON.stringify({finalData})
//     })
//         .then(response => response.json())
//         .then((data) => {
//           console.log('inside Success:', data);
//         //   navigate('/basicinfo')
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
// //    axios.post("http://localhost:3000/post/",(finalData)
// //   )
// //     .then((response) => {
        
// //       console.log(response.data );
     
// //     }).catch(
// //         (error)=>{
// //             console.log(error);
            
// //         }
// //     )


   
// }

//     return(


//         <div>
//             <multiStepContext.Provider value = {{userData,setUserData, finalData, setfinalData, submitData}} >

// {/* <Addnewproperty /> */}

//             </multiStepContext.Provider>
//         </div>
//     )
// }
// export default StepContext