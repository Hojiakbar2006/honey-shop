import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
import blackLogo from "../../Assets/Icons/honey-black-logo.svg";

import facebook from "../../Assets/Icons/facebook-logo.svg"
import twitter from "../../Assets/Icons/twitter-logo.svg"
import pinterest from "../../Assets/Icons/pinterest-logo.svg"
import googleLogo from "../../Assets/Icons/google-logo.svg"

import playMarket from "../../Assets/Icons/google-play-logo.svg"
import appStore from "../../Assets/Icons/app-store-logo.svg"

export function Footer() {
  return (
    <footer id="footer">
      <Link to="/">
        <img src={blackLogo} alt="" />
      </Link>
      <p>
        Honey is one of the prime ingredients in your everyday food schedule.{" "}
      </p>
      <div>
        <Link>
          <img src={facebook} alt="" />
        </Link>
        <Link>
          <img src={twitter} alt="" />
        </Link>
        <Link>
          <img src={googleLogo} alt="" />
        </Link>
        <Link>
          <img src={pinterest} alt="" />
        </Link>
      </div>
      <div>
        <Link>
          <img src={playMarket} alt="" />
        </Link>
        <Link>
          <img src={appStore} alt="" />
        </Link>
      </div>
    </footer>
  );
}
