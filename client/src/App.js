import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Router from './contents/routing/router';

function App() {
  return (
         <BrowserRouter>
          <Router/>        
          </BrowserRouter>
  );
}

export default App;
