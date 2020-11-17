import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";
import { useLocation } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const [error, setError] = useState(false);

  console.log(email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      username !== undefined &&
      email !== undefined &&
      password !== undefined
    ) {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            username: username,
            email: email,
            password: password,
          }
        );
        console.log(response.data);
        const token = response.data.token;
        setUser(token);
        setError(false);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      {/* Modal */}
      {/* ////////////////////////////////////////////////////////////// */}
      <div
        style={{
          visibility: hidden ? "visible" : "hidden",
        }}
        className="modal"
      >
        <Modal
          username={username}
          setHidden={setHidden}
          frompublish={location}
        ></Modal>
      </div>
      {/* ////////////////////////////////////////////////////////////// */}
      <div className="loginsignup_container">
        <form onSubmit={handleSubmit}>
          <h2>S'inscrire</h2>

          <input
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />

          <input
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />

          <div className="signup_checkbox">
            <input type="checkbox"></input>
            <span>S'inscrire à notre newsletter</span>
          </div>

          <p className="signup_terms">
            En m'inscrivant je confirme avoir lu et accepté les Termes
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <button
            onClick={() => {
              setHidden(username === undefined ? false : true);
              setHidden(email === undefined ? false : true);
              setHidden(password === undefined ? false : true);
            }}
            type="submit"
          >
            S'inscrire
          </button>
          <p style={{ color: "red" }}>
            {error === true ? "Il manque des informations" : ""}
          </p>

          <Link style={{ textDecoration: "none" }} to="/login">
            <p>Tu as déjà un compte ? Connecte-toi!</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
