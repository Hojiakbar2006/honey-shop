import React, { useState } from "react";
import "./NavBar.css";
import orangeLogo from "../../Assets/Icons/honey-orange-logo.svg";
import blackLogo from "../../Assets/Icons/honey-black-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "../../Assets/Icons/Search_icon.svg";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function NavBar({ route }) {
  const location = useLocation();
  const products = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const viewId = products.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

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
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            style={
              location.pathname !== "/" ? { borderRight: "2px solid #fff" } : {}
            }
          />
          <img src={Search} alt="" />
          {search ? (
            <div className="viewId">
              {viewId.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(`view/${item.id}`);
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
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
