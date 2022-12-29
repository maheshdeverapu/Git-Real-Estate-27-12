import React, {useContext, useState} from "react";
import Addnewproperty from "./Addnewproperty";
export const multiStepContext = React.createContext();

const StepContext =()=>
{

const [userData, setUserData]= useState([])
const [finalData, setfinalData]= useState([])

function submitData()
{
    setfinalData(finalData=>[...finalData, userData])
    setUserData('')
}

    return(


        <div>
            <multiStepContext.Provider value = {{userData,setUserData, finalData, setfinalData, submitData}} >

<Addnewproperty />

            </multiStepContext.Provider>
        </div>
    )
}
export default StepContext