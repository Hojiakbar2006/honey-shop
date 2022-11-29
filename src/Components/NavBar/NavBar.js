import React from "react";
import "./NavBar.css";
import orangeLogo from "../../Assets/Icons/honey-orange-logo.svg";
import blackLogo from "../../Assets/Icons/honey-black-logo.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "../../Assets/Icons/Search_icon.svg";
import { useLocation } from "react-router-dom";

export function NavBar({ route }) {
  const location = useLocation();

  return (
    <div
      id="NavBar"
      style={location.pathname !== "/" ? { background: "#ffc15a" } : {}}
    >
      <Link>
        <img src={location.pathname !== "/" ? blackLogo : orangeLogo} alt="/" />
      </Link>
      <div className="navItem">
        <label
          className="search"
          style={
            location.pathname !== "/"
              ? { background: "transparent", border: "2px solid #fff" }
              : {}
          }
        >
          <input
            type="text"
            placeholder="Search"
            style={
              location.pathname !== "/" ? { borderRight: "2px solid #fff" } : {}
            }
          />
          <img src={Search} alt="" />
        </label>
        {route.map((item) => (
          <NavLink key={item.id} to={item.routeName}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
