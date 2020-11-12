import React, { useState } from "react";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>S'inscrire</p>
          <div>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
