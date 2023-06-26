import "./Navbar.css";
import { useEffect } from "react";

function Navbar(props) {
  useEffect(() => {
    if (props.imgModal) {
      document.querySelector(".nav-top-button").style.position = "static";
    } else {
      document.querySelector(".nav-top-button").style.position = "fixed";
    }
  });
  
  return (
    <div>
      <button className="nav-top-button text-center text-black">
        Woojoon Kim
      </button>
    </div>
  );
}

export default Navbar;
