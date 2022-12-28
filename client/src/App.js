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
import {Link } from "react";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={ <Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/basicInfo' element={<BasicInfo/>}/>
          <Route path='/generalInfo' element={<GeneralInfo/>}/>
          <Route path='/propertyDetails' element={<PropertyDetails/>}/>
          <Route path='/locationInfo' element={<LocationInfo/>}/>
          <Route path='/' element={<AddProperty/>}/>

        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
