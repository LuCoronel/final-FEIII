import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleTheme = () => {
    dispatch({ type: "toggle_theme" });
  };

  return (
    <nav className={state?.theme === "dark" ? "dark" : "light"}>
      <span className="navLogo">
        <Link to="/home">DH Clinic Odonto </Link>
      </span>

      <div>
        <span>
          <Link to="/home">Home</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/favs">Favs</Link>
        </span>
        <button className="navBtn" onClick={handleTheme}>
          {" "}
          {state.theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
