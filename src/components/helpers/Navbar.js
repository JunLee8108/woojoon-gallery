import "./Navbar.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  let navigate = useNavigate();
  useEffect(() => {
    if (props.imgModal) {
      document.querySelector(".nav-top-button").style.position = "static";
      document.querySelector(".nav-top-button2").style.position = "static";
    } else {
      document.querySelector(".nav-top-button").style.position = "fixed";
      document.querySelector(".nav-top-button2").style.position = "fixed";
    }
  });

  return (
    <div>
      <button className="nav-top-button text-center text-black" onClick={()=>{
        navigate("/Profile")}}>
        Woojoon Kim
      </button>
      <button className="nav-top-button2 text-center text-black" onClick={()=>{
        navigate("/Profile")}}>
        ArtWork
      </button>
    </div>
  );
}

export default Navbar;
