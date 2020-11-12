import React from "react";
import Logo from "../assets/img/logovinted.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header_section">
        <img className="logo" src={Logo} alt="" />

        <div>
          <input type="text" name="recherche" id="" />
        </div>
        <div className="header_buttons">
          <Link to="/signup">
            <div>
              <button>S'inscrire</button>
            </div>
          </Link>

          <div>
            <button>Se connecter</button>
          </div>
          <div>
            <button>vends</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
