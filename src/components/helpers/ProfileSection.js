import "./ProfileSection.css";
import { useNavigate } from "react-router-dom";

function ProfileSection() {
  return (
    <>
      {/* Navbar */}
      <NavbarProfile />
      {/* Body */}
      <div>asasdasdd</div>
    </>
  );
}

function NavbarProfile() {
  let navigate = useNavigate();
  return (
    <div className="nav-bar-container">
      <button
        className="nav-top-button text-center text-black"
        onClick={() => {
          navigate("/");
          document.body.style.overflow = "unset"
        }}
      >
        WOOJOON KIM
      </button>
      <progress className="progressBar"></progress>
    </div>
  );
}

export default ProfileSection;
