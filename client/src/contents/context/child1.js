import { NotificationContext } from "./notificationcontext";
import { useContext } from "react";
import Search from "../others/search";
import GetAll from "../screens/getAll";
const Child1 =()=>{
    // const Data = useContext(NotificationContext)
return(
    <NotificationProvider>
        {/* <Search/>
            <GetAll/> */}
    </NotificationProvider>
)
}
export default Child1;