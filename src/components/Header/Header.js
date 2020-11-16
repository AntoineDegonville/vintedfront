import React from "react";
import Logo from "/Users/Antoine/LeReacteur/REACT/vintedfront/src/assets/img/logovinted.png";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Header/Header.css";

const Header = ({ token, setUser }) => {
  const history = useHistory();
  return (
    <header>
      <div className="header_section">
        <div className="header_container">
          <Link to="/home">
            <img className="logo" src={Logo} alt="" />
          </Link>
          <div className="header_relative">
            <input
              className="header_bar"
              type="text"
              name="recherche"
              id="search_bar"
              placeholder="Recherche des articles"
            />
            <FontAwesomeIcon
              className="header_magnifiying"
              icon="search"
            ></FontAwesomeIcon>
          </div>

          <div className="header_buttons">
            {token ? (
              <div className="logout_header_section">
                <button
                  className="header_logout"
                  onClick={() => {
                    setUser(null);
                    history.push("/home");
                  }}
                >
                  Se déconnecter
                </button>
              </div>
            ) : (
              <>
                <div className="signuplogin_header_buttons">
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
              </>
            )}
          </div>
          <Link to="/publish">
            <button className="header_sell_button">vends tes articles</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
