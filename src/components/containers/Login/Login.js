import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";
import "../Login/Login.css";
import { useLocation, useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState("");
  const [hidden, setHidden] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== undefined && password !== undefined) {
      try {
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
      {/* MODAL */}
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
              setHidden(email === undefined ? false : true);
              setHidden(password === undefined ? false : true);
            }}
            type="submit"
          >
            Connection
          </button>
          <p style={{ color: "red" }}>
            {error === true ? "Mauvais email et/ou mot de passe" : ""}
          </p>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <p>Pas encore de compte ? Inscris-toi !</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
