import React from "react";
import "./searchMain.css";
import SearchHome from "./searchHome";
import SideNav from "./sideNav";
import MainHeader from "./mainHeader";

const SearchMain = () => {

  return (
    <div className="home">
        <SideNav/>
      <div className="main_home">
        <MainHeader/>
              <div >
                <SearchHome/>
              </div>
      </div>
    </div>
  );
};

export default SearchMain;
