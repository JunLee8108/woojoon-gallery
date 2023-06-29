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
    <div>
      <button
        className="nav-top-button text-center text-black"
        onClick={() => {
          navigate("/");
        }}
      >
        Woojoon Kim
      </button>
    </div>
  );
}

export default ProfileSection;
