import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      history.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="loginsignup_container">
        <form onSubmit={handleSubmit}>
          <h2>S'inscrire</h2>
          <div>
            <input
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            />
          </div>
          <div>
            <input
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />
          </div>
          <div className="signup_checkbox">
            <input type="checkbox"></input>
            <span>S'inscrire à notre newsletter</span>
          </div>

          <p className="signup_terms">
            En m'inscrivant je confirme avoir lu et accepté les Termes
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>

          <div>
            <button type="submit">S'inscrire</button>
          </div>
          <p>Pas encore de compte ? Inscris-toi !</p>
        </form>
      </div>
    </>
  );
};

export default Signup;
