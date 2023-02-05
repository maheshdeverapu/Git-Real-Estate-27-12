import React from "react";
// import { useState, useEffect } from "react";
import "./searchMain.css";
// import { useNavigate, Link } from "react-router-dom";
import SearchHome from "./searchHome";
import SideNav from "./sideNav";
import MainHeader from "./mainHeader";

const SearchMain = () => {
//   const [ppd_id, setSearch] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [imageOverlay, setImageOverlay] = useState(false);
//   const [popup, setPopup] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");
//   const [displayLogout, setDisplayLogout] = useState(false);
//   const [basicInfo,setBasicInfo] = useState(false);

//   const [currentPage, setCurrentPage] = useState(0);
//   const [pageSize] = useState(10);

//   const navigate = useNavigate();

//   useEffect(() => {
//     homeHandling(0, 10, 0,ppd_id); //10,20,1
//   }, [ppd_id]);

//   const homeHandling = (start, end, increase, ppd_id) => {
//     // fetch(`/getId?ppd_id=${ppd_id}&_start=${start}&_end=${end}&limit=5`, {
//     fetch(`/getId?ppd_id=${ppd_id}&limit=${pageSize}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: localStorage.getItem("token"),
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("data",data.user)
//         setPosts(data.user);
//         setCurrentPage(currentPage + increase);
//         // debugger
//       })
//       .catch((err) => {
//         console.log("catch", err);
//       })
//       .finally();
//   };
  
//   const logoutHandling = (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     navigate("/signin");
//   };


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
