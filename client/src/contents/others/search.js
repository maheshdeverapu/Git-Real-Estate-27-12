import React from "react";
import { useState, useEffect } from "react";
import "./search.css";
import { useNavigate, Link } from "react-router-dom";
import Card from "./card";
import Popup from "./popup";
import BasicInfo from "../Pages/BasicInfo";

const Search = () => {
  const [ppd_id, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [imageOverlay, setImageOverlay] = useState(false);
  const [popup, setPopup] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [displayLogout, setDisplayLogout] = useState(false);
  const [basicInfo,setBasicInfo] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    homeHandling(0, 10, 0,ppd_id); //10,20,1
  }, [ppd_id]);

  const homeHandling = (start, end, increase, ppd_id) => {
    // fetch(`/getId?ppd_id=${ppd_id}&_start=${start}&_end=${end}&limit=5`, {
    fetch(`/getId?ppd_id=${ppd_id}&limit=${pageSize}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data",data.user)
        setPosts(data.user);
        setCurrentPage(currentPage + increase);
        // debugger
      })
      .catch((err) => {
        console.log("catch", err);
      })
      .finally();
  };
  // useEffect(() => {
  //   // debugger
  //   fetch(`/getId?ppd_id=${ppd_id}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log("data",data.user)
  //       setPosts(data.user);
  //       // debugger
  //     })
  //     .catch((err) => {
  //       console.log("catch", err);
  //     })
  //     .finally();
  // }, [ppd_id]);

  const logoutHandling = (e) => {
    e.preventDefault();
    // localStorage.clear();
    navigate("/signin");
  };

  const searchHandling = (e) => {
    let searchValue = e.target.value;
    if(searchValue === ""){
        setSearch("")
       return homeHandling(0, 10, 0);
    }
    setSearch(e.target.value);
    homeHandling(0, 10, 0, "search", searchValue);
};

  const paginationHandle = () => {
    if (currentPage === 0) {
      return (
        <>
          <p>1</p>
          <button
            onClick={() => {
              homeHandling(
                (currentPage + 1) * pageSize,
                (currentPage + 2) * pageSize,
                1
              );
            }}
          >
            next
          </button>
        </>
      );
    } else if (currentPage < pageSize - 1 && posts.length === pageSize) {
      return (
        <>
          <button
            onClick={() => {
              homeHandling(
                (currentPage - 1) * pageSize,
                currentPage * pageSize,
                -1
              );
            }}
          >
            prev
          </button>
          <p>{currentPage + 1}</p>
          <button
            onClick={() => {
              homeHandling(
                (currentPage + 1) * pageSize,
                (currentPage + 2) * pageSize,
                1
              );
            }}
          >
            next
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              homeHandling(
                (currentPage - 1) * pageSize,
                currentPage * pageSize,
                -1
              );
            }}
          >
            prev
          </button>
          <p>{currentPage + 1}</p>
        </>
      );
    }
  };


  return (
    <div className="home">
      <div className="side_nav">
        <h1>Logo</h1>
        <div className="side_nav_content">
          <div>
            <h3>A</h3>
            <h3>Property</h3>
          </div>
          <div>
            <h3>B</h3>
            <h3>Assistance</h3>
          </div>
          <div>
            <h3>C</h3>
            <h3>Received Interest</h3>
          </div>
          <div>
            <h3>D</h3>
            <h3>Sent Interest</h3>
          </div>
          <div>
            <h3>E</h3>
            <h3>Property Views</h3>
          </div>
          <div>
            <h3>F</h3>
            <h3>Tarrif Plan</h3>
          </div>
        </div>
      </div>
      <div className="main_home">
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
              <i className="fa-solid fa-user"></i>
              {localStorage.getItem("userId").split("@")[0]}
              <i className="fa-solid fa-angle-down"></i>{" "}
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
        <div className="main_sub_header">
          <input
            className="search"
            type={"text"}
            onChange={(e) => {
              searchHandling(e);
            }}
            placeholder="search"
          ></input>
          <i className="fa-solid fa-magnifying-glass"></i>
          <button className="app-property-button">
            <Link className="app-property" to={"/basicInfo"}>
              Add Property
            </Link>
          </button>
        </div>
        <div className="main_content">
          <table>
            <thead>
              <tr>
                <th>PPD ID</th>
                <th>IMAGE</th>
                <th>PROPERTY</th>
                <th>CONTACT</th>
                <th>AREA</th>
                <th>VIEWS</th>
                <th>STATUS</th>
                <th>DAYS LEFT</th>
                <th>ACTION</th>
                {/* <th>OTHERS</th> */}
              </tr>
            </thead>
            <tbody>
              {posts.map((ele, i) => {
                return (
                  <Card
                    ele={ele}
                    key={i}
                    imageOverlay={imageOverlay}
                    setImageOverlay={setImageOverlay}
                    setPopup={setPopup}
                    setImageUrl={setImageUrl}
                  />
                );
              })}
            </tbody>
          </table>
          {paginationHandle()}
          <Popup popup={popup} setPopup={setPopup} imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default Search;
