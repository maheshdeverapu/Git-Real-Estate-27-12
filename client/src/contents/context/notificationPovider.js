import { useState } from "react";
import Search from "../others/search";
import GetAll from "../screens/getAll";
import { NotificationContext } from "./createContext";


const NotificationProvider = (props) =>{
    const [homeContent,setHomeContent] = useState([]);
    const parentGdata = ["rajesh",23]
    return(
        <NotificationContext.Provider value={{setHomeContent,homeContent}}>
            {props.children}
        </NotificationContext.Provider>

    )
}
export default NotificationProvider;