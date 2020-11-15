import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
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
      console.log(response.data);
      const token = response.data.token;
      console.log(token);
      setUser(token);
      history.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
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
          <div>
            <input
              placeholder="Mot de passe"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              value={password}
            />
            <button type="submit">Connection</button>
          </div>

          <p>Pas encore de compte ? Inscris-toi !</p>
        </form>
      </div>
    </>
  );
};

export default Login;
