import Signin from '../athentication-pages/login-page';
import Signup from '../athentication-pages/signup-page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralInfo from '../screens/general-info';
import PropertyDetails from '../screens/property-detail';
import LocationInfo from '../screens/location-info';
import { useEffect } from "react";
import SearchMain from '../others/searchMain';
import { useNavigate } from 'react-router-dom';
import BasicInfo from '../screens/basic-info';
import { useState } from "react";

const Router = () => {
  const navigate = useNavigate();
  const navigates = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user")
    if (!user) {
      navigate("/")
    }
  }, [])
  const [addProperties, setAddProperty] = useState({});
  const [editPost, setEditPost] = useState(false)
  const [url, setUrl] = useState("");
  useEffect(() => {
    setAddProperty({ ...addProperties, "photo": url })
  }, [url])

  const dataHandling = () => {
    if (!editPost) {
      fetch("/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({ ...addProperties, status: "unsold", userId: localStorage.getItem("userId") })
      }).then(res => res.json()).then((data) => {
        console.log("data in final .then", data)
        if (data.error) {
          return alert(data.error)
        }
        alert('successfully posted')
        setAddProperty({})
        navigates("/getId")
      }).catch((err) => {
        console.log(err)
      })
    }
    else {
      fetch("/updatePost", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({ ...addProperties, userId: localStorage.getItem("userId") })
      }).then(res => res.json()).then((data) => {
        console.log("data in final .then", data)
        if (data.error) {
          return alert(data.error)
        }
        alert('successfully updated')
        setAddProperty({});
        setEditPost(false);
        navigates("/getId")
      }).catch((err) => {
        console.log(err)
      })
    }
  }
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Signin />} />
        <Route path='/basicInfo' element={<BasicInfo addProperties={addProperties} setAddProperty={setAddProperty} />} />
        <Route path='/generalInfo' element={<GeneralInfo addProperties={addProperties} setAddProperty={setAddProperty} setUrl={setUrl} />} />
        <Route path='/propertyDetails' element={<PropertyDetails addProperties={addProperties} setAddProperty={setAddProperty} />} />
        <Route path='/locationInfo' element={<LocationInfo addProperties={addProperties} setAddProperty={setAddProperty} dataHandling={dataHandling} />} />
        <Route path='/getId' element={<SearchMain setAddProperty={setAddProperty} addProperties={addProperties} setEditPost={setEditPost} />} />
      </Routes>
    </>
  )
}

export default Router
