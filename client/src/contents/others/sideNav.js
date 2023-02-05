import "./sideNav.css";
const SideNav =()=>{
    return(
        <div className="side_nav">
        <h1>Logo</h1>
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