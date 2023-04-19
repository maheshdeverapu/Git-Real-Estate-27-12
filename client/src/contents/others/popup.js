import "./popup.css";

const Popup =({popup,setPopup,imageUrl})=>{
    return popup?(
        <div className="popup">
            <div className="popInner">
            <div className="popup-inner" >
            <img className="popup_image" src={imageUrl} alt="img" ></img>
            <button  className={"popup_button"} onClick={()=>{setPopup(false)}}>X</button>
                </div>
            </div>
        </div>
    ):"";
}
export default Popup;