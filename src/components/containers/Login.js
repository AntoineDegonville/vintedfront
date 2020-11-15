import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Modal from "../Modal";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState("");
  const [hidden, setHidden] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.token;
      setUser(token);
      setUsername(response.data.account.username);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* MODAL */}
      <div
        style={{
          visibility: hidden ? "visible" : "hidden",
          animationName: animation ? "pop" : "none",
        }}
        className="modal"
      >
        <Modal username={username} setHidden={setHidden}></Modal>
      </div>
      {/* ////////////////////////////////////////////////////////////// */}
      <div className="loginsignup_container">
        <h2>Se Connecter</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Adresse e-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
          />

          <input
            placeholder="Mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
          />
          <button
            onClick={() => {
              setHidden(true);
              setAnimation(true);
            }}
            type="submit"
          >
            Connection
          </button>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <p>Pas encore de compte ? Inscris-toi !</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
