import React from "react";
import { useState, useEffect } from "react";
import "./searchHome.css";
import { useNavigate, Link } from "react-router-dom";
import Card from "./card";
import Popup from "./popup";

const SearchHome = () => {
  const [ppd_id, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [imageOverlay, setImageOverlay] = useState(false);
  const [popup, setPopup] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    homeHandling(0, pageSize, 0,ppd_id); //10,20,1
  }, [ppd_id]);

  const homeHandling = (start, end, increase, ppd_id) => {
    fetch(`/getId?limit=${pageSize}&ppd_id=${ppd_id}&start=${start}&end=${end}`, {
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

  const paginationHandle = () => {
    if (currentPage === 0) {
      return (
        <div className="pagination">
          <p>1</p>
          { posts.length<pageSize ?
        "":
          <button className="pagination_next"
          onClick={() => {
            homeHandling(
              (currentPage + 1) * pageSize,
              (currentPage + 2) * pageSize,
              1,ppd_id
            );
          }}
        >
          next
          <i className="fa-solid fa-angles-right"></i>
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
                -1,ppd_id
              );
            }}
          >
            <i className="fa-solid fa-angles-left"></i>
            prev
          </button>
          <p>{currentPage + 1}</p>
          { posts.length<pageSize ?
        "":
          <button className="pagination_next"
            onClick={() => {
              homeHandling(
                (currentPage + 1) * pageSize,
                (currentPage + 2) * pageSize,
                1,ppd_id
              );
            }}
          >
            next
            <i className="fa-solid fa-angles-right"></i>
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
                -1,ppd_id
              );
            }}
          >
            <i className="fa-solid fa-angles-left"></i>
            prev
          </button>
          <p>{currentPage + 1}</p>
        </div>
      );
    }
  };


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
            placeholder="search"
          ></input>
          <i className="fa-solid fa-magnifying-glass mag_glass"></i>
      </div>
      </div>
       
            <Link className="app-property app-property-button" to={"/basicInfo"}>
              Add Property
            </Link>
     
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
              {posts?.map((ele, i) => {
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
  );
};

export default SearchHome;
