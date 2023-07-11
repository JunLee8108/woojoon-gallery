import "./Navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  let navigate = useNavigate();

  useEffect(() => {
    if (props.imgModal) {
      document.querySelector(".nav-bar-container").style.position = "static";
    } else {
      document.querySelector(".nav-bar-container").style.position = "sticky";
    }
  });

  const scrollEvent = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    let bar = document.querySelector(".progressBar");
    bar.max = 100;
    bar.value = scrolled;
  };

  useEffect(() => {
    let timer = setInterval(() => {
      window.addEventListener("scroll", scrollEvent);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div className="nav-bar-container">
      <button
        className="nav-top-button text-center text-black"
        onClick={() => {
          navigate("/Profile");
        }}
      >
        WOOJOON KIM
      </button>
      <progress className="progressBar"></progress>
    </div>
  );
}

export default Navbar;
