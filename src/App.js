import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/containers/Home";
import Offer from "./components/containers/Offer";
import Header from "./components/Header";
import Signup from "./components/containers/Signup";
import Login from "./components/containers/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(Cookies.get("usertoken") || null);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookies.set("usertoken", tokenToSet);
      setToken(tokenToSet);
    } else {
      Cookies.remove("usertoken");
      setToken(null);
    }
  };

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div>
        <Router>
          <Header token={token} setUser={setUser}></Header>
          <Switch>
            <Route path="/signup">
              <Signup setUser={setUser}></Signup>
            </Route>
            <Route path="/login">
              <Login setUser={setUser}></Login>
            </Route>
            <Route path="/offer/:id">
              <Offer></Offer>
            </Route>
            <Route path="/home">
              <Home data={data} setData={setData}></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
