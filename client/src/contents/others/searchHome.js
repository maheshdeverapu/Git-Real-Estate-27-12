import React from "react";
import { useState, useEffect, CSSProperties } from "react";
import "./searchHome.css";
import { Link } from "react-router-dom";
import Card from "./card";
import Popup from "./popup";
import ClipLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
  display: "block",
  margin: "auto",
};

const SearchHome = ({ currentPages, setAddProperty, addProperties, setEditPost }) => {
  const [ppd_id, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [imageOverlay, setImageOverlay] = useState(false);
  const [popup, setPopup] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(5);
  const [userPost, setUserPost] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    homeHandling(0, pageSize, 0, ppd_id); //10,20,1
  }, [ppd_id, userPost]);
  const homeHandling = (start, end, increase, ppd_id) => {
    setIsLoader(true);
    if (!userPost) {
      fetch(`/getId?limit=${pageSize}&ppd_id=${ppd_id}&start=${start}&end=${end}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data.user)
          setIsLoader(false);
          setPosts(data.user);
          setCurrentPage(currentPage + increase);
        })
        .catch((err) => {
          console.log("catch", err);
        })
        .finally();
    }
    else {
      fetch(`/myPosts/${localStorage.getItem("userId")}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }).then(res => res.json()).then((data) => {
        setIsLoader(false);
        if (data.error) {
          setPosts([]);
          return;
        }
        setPosts(data);
        console.log(data);
      }).catch(err => { console.log(err.message) })
    }
  };
  const paginationHandle = () => {
    if (currentPage === 0) {
      return (
        <div className="pagination">
          <p>1</p>
          {posts.length < pageSize ?
            "" :
            <button className="pagination_next"
              onClick={() => {
                homeHandling(
                  (currentPage + 1) * pageSize,
                  (currentPage + 2) * pageSize,
                  1, ppd_id
                );
              }}
            >
              next
              <i className="fa-solid pagination_butt pag_next fa-angles-right"></i>
            </button>
          }
        </div>
      );
    } else if (currentPage < pageSize - 1 && posts.length === pageSize) {
      return (
        <div className="pagination">
          <button className="pagination_prev"
            onClick={() => {
              homeHandling(
                (currentPage - 1) * pageSize,
                currentPage * pageSize,
                -1, ppd_id
              );
            }}
          >
            <i className="fa-solid pagination_butt fa-angles-left"></i>
            prev
          </button>
          <p>{currentPage + 1}</p>
          {posts.length < pageSize ?
            "" :
            <button className="pagination_next"
              onClick={() => {
                homeHandling(
                  (currentPage + 1) * pageSize,
                  (currentPage + 2) * pageSize,
                  1, ppd_id
                );
              }}
            >
              next
              <i className="fa-solid pagination_butt pag_next fa-angles-right"></i>
            </button>
          }
        </div>
      );
    } else {
      return (
        <div className="pagination">
          <button className="pagination_prev"
            onClick={() => {
              homeHandling(
                (currentPage - 1) * pageSize,
                currentPage * pageSize,
                -1, ppd_id
              );
            }}
          >
            <i className="fa-solid pagination_butt fa-angles-left"></i>
            prev
          </button>
          <p>{currentPage + 1}</p>
        </div>
      );
    }
  };
  const propertiesHandling = () => {
    setUserPost(!userPost)
  }
  return (
    <div>
      <div className="main_sub_header">
        <div>
          <div className="search_fol">
            <input
              className="search"
              type={"text"}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="search PPD ID"
            ></input>
            <i className="fa-solid fa-magnifying-glass mag_glass"></i>
          </div>
        </div>
        <div className="buttons_searchHome">
          <button className="user_post" onClick={(e) => { propertiesHandling(e) }}>{!userPost ? "My Properties" : "All Properties"}</button>
          <Link className="app-property app-property-button" to={"/basicInfo"}>
            Add Property
          </Link>
        </div>
      </div>
      <div className="main_content">
        <table>
          <thead>
            <tr>
              {userPost && <th>SELECT</th>}
              <th>PPD ID</th>
              <th>IMAGE</th>
              <th>PROPERTY</th>
              <th>CONTACT</th>
              <th>AREA</th>
              <th>VIEWS</th>
              <th>STATUS</th>
              <th>DAYS LEFT</th>
              <th>ACTION</th>
              {userPost && <th>OPERATION</th>}
            </tr>
          </thead>
          <tbody>
            {isLoader ? (
              <tr>
                <td colSpan={100} style={{ backgroundColor: "rgb(209,209,209)" }}>
                  <ClipLoader
                    color="#36d7b7"
                    size={100}
                    speedMultiplier={1}
                    cssOverride={override}
                  />
                </td>
              </tr>
            ) : ((posts.length == 0) ? (<tr><td colSpan={11}><h3>no posts</h3></td></tr>) :
              (posts?.map((ele, i) => {
                return (
                  <Card
                    ele={ele}
                    key={i}
                    imageOverlay={imageOverlay}
                    setImageOverlay={setImageOverlay}
                    setPopup={setPopup}
                    setImageUrl={setImageUrl}
                    userPost={userPost}
                    setUserPost={setUserPost}
                    setAddProperty={setAddProperty}
                    addProperties={addProperties}
                    setEditPost={setEditPost}
                  />
                );
              })))}
          </tbody>
        </table>
        <Popup popup={popup} setPopup={setPopup} imageUrl={imageUrl} />
      </div>
      {paginationHandle()}
    </div>
  );
};

export default SearchHome;
