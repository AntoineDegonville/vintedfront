import React, { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
          />
          <button type="submit">Connection</button>
          <p>Pas encore de compte ? Inscris-toi !</p>
        </form>
      </div>
    </>
  );
};

export default Login;
