import "./sideNav.css";
const SideNav =({setCurrentPages})=>{
    return(
        <div className="side_nav">
        <img onClick={setCurrentPages} className="login-logo home_logo"  src="https://media.istockphoto.com/id/1217096485/vector/geometric-logo-related-to-property-real-estate-agent-or-construction.jpg?s=612x612&w=0&k=20&c=ZdnrJ4sTVP3XwOrCzBHlbmclDVGtvXJwmQpImjkCM3Q="></img>
        <div className="side_nav_content">
          <div>
            <h3><i className="fa-solid fa-house"></i></h3>
            <h3>Property</h3>
          </div>
          <div>
            <h3><i className="fa-solid fa-bell"></i></h3>
            <h3>Assistance</h3>
          </div>
          <div>
            <h3><i className="fa-solid fa-download"></i></h3>
            <h3>Received Interest</h3>
          </div>
          <div>
            <h3><i className="fa-solid fa-upload"></i></h3>
            <h3>Sent Interest</h3>
          </div>
          <div>
            <h3><i className="fa-regular fa-circle"></i></h3>
            <h3>Property Views</h3>
          </div>
          <div>
            <h3><i className="fa-solid fa-tag"></i></h3>
            <h3>Tarrif Plan</h3>
          </div>
        </div>
      </div>
    )
}
export default SideNav;