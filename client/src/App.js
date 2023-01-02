import logo from './logo.svg';
import './App.css';
import Signin from './contents/athentication-pages/login-page';
import Signup from './contents/athentication-pages/signup-page';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import BasicInfo from './contents/screens/basic-info';
import GeneralInfo from './contents/screens/general-info';
import PropertyDetails from './contents/screens/property-detail';
import AddProperty from './contents/screens/add-property';
import LocationInfo from './contents/screens/location-info';
import {Link, useEffect } from "react";
import GetAll from './contents/screens/getAll';
import Search from './contents/others/search';
import NotificationProvider from './contents/context/notificationPovider';
import { useNavigate } from 'react-router-dom';
import Child1 from './contents/context/child1';
import { NotificationContext } from './contents/context/createContext';
const Router =()=>{

  const navigate = useNavigate();
  useEffect(()=>{
    const user = localStorage.getItem("user")
    // console.log(user)
    if(!user){
      navigate("/signin")
    }
    else{
      navigate("/")
    }
  
  },[])
  return(
    <>
       <Routes>
    <Route path='/signup' element={ <Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>


          <Route path='/basicInfo' element={<BasicInfo/>}/>
          <Route path='/generalInfo' element={<GeneralInfo/>}/>
          <Route path='/propertyDetails' element={<PropertyDetails/>}/>
          <Route path='/locationInfo' element={<LocationInfo/>}/>
          <Route path='/info' element={<AddProperty/>}/>
          <Route path='/home' element={<GetAll/>}/>
          <Route path='/getId' element={<Search/>}/>

          </Routes>
    </>
  )
}

function App() {
  return (
    <div>
     
         
        <BrowserRouter>
       
          

          {/* <Route path='/parent' element={<NotificationProvider/>}/> */}
          <Router/>
          
        
      </BrowserRouter>
          
    
      
      
      
    </div>
  );
}

export default App;
