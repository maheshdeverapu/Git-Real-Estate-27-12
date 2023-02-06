import "./mainHeader.css";
import React from "react";
import { useState, useEffect } from "react";
import "./searchMain.css";
import { useNavigate, Link } from "react-router-dom";

const MainHeader = () => {
  const [ppd_id, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [imageOverlay, setImageOverlay] = useState(false);
  const [popup, setPopup] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [displayLogout, setDisplayLogout] = useState(false);
  const [basicInfo, setBasicInfo] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);

  const navigate = useNavigate();

  const logoutHandling = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="main_header">
      <p>USER ID: 76PPD128</p>
      <div className="logout_content">
        <h3
          onMouseEnter={() => {
            setDisplayLogout(true);
          }}
          onMouseLeave={() => {
            setDisplayLogout(false);
          }}
        >
          <i className="fa-solid fa-user user"></i>
          <span>{localStorage.getItem("userId").split("@")[0]}</span>
          <i className="fa-solid fa-angle-down"></i>
        </h3>
        {displayLogout && (
          <button
            onMouseEnter={() => {
              setDisplayLogout(true);
            }}
            onMouseLeave={() => {
              setDisplayLogout(false);
            }}
            className="logouts"
            onClick={logoutHandling}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};
export default MainHeader;
