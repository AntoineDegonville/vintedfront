import React from "react";
import Logo from "../assets/img/logovinted.png";
import { Link } from "react-router-dom";

const Header = ({ token }) => {
  return (
    <header>
      <div className="header_section">
        <img className="logo" src={Logo} alt="" />

        <div>
          <input type="text" name="recherche" id="" />
        </div>
        <div
          style={{ visibility: token ? "visible" : "hidden" }}
          className="header_buttons"
        >
          <Link to="/signup">
            <div>
              <button>S'inscrire</button>
            </div>
          </Link>

          <div>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
        </div>
        <div>
          <button>vends</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
