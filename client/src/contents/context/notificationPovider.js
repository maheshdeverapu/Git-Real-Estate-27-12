// import { useState } from "react";
// import Search from "../others/search";
// import GetAll from "../screens/getAll";
// import { NotificationContext } from "./createContext";


// const NotificationProvider = (props) =>{
//     const [addProperty,setAddProperty] = useState({ 
//         email:"",
//     address:"",
//     pincode:""});
//     const handleAddProperty =(e)=>{
//         // setAddProperty()
//         debugger
//     }
//     // const parentGdata = ["rajesh",23]
//     return(
//         <div>
//         <NotificationContext.Provider value={{handleAddProperty,addProperty,setAddProperty}}>
//             {props.children}
//         </NotificationContext.Provider>
//         </div>
//     )
// }
// export default NotificationProvider;