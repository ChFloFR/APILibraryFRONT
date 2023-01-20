import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  URL_HOME,
  URL_BOOKS,
  URL_AUTHORS,
  URL_EDITORS,
} from "../../constants/urls/urlFront";

import logo from "../../assets/icone/book_icon_158035.svg";

const Navbar = () => {
  const [menuClass, setMenuClass] = useState("hidden");
  const [logoDisplay, setLogoDisplay] = useState("");

  return (
    <div className="fixed z-50 w-full h-20">
      <div className={`${logoDisplay} block`}>
        <Link to={URL_HOME}>
          <img
            className="h-20 w-20 cursor-pointer"
            src={logo}
            alt="logo livre du site"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
