import React from "react";
import Logo from "../assets/img/logovinted.png";

const Header = () => {
  return (
    <header>
      <div className="header_section">
        <img className="logo" src={Logo} alt="" />

        <div>
          <input type="text" name="recherche" id="" />
        </div>
        <div>
          <button>S'inscrire</button>
        </div>
        <div>
          <button>Se connecter</button>
        </div>
        <div>
          <button>vends</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
