import React from "react";
import "./homeScreen.css";
import SearchHome from "./searchHome";
import SideNav from "./sideNav";
import MainHeader from "./mainHeader";

const HomeScreen = ({setAddProperty,addProperties,setEditPost}) => {

  return (
    <div className="home">
        <SideNav/>
      <div className="main_home">
        <MainHeader/>
              <div >
                <SearchHome setAddProperty={setAddProperty} addProperties ={addProperties} setEditPost={setEditPost}/>
              </div>
      </div>
    </div>
  );
};

export default HomeScreen;
