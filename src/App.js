import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/containers/Home/Home";
import Offer from "./components/containers/Offer/Offer";
import Header from "./components/Header/Header";
import Signup from "./components/containers/Signup/Signup";
import Login from "./components/containers/Login/Login";
import Publish from "./components/containers/Publish/Publish";
import Payment from "./components/containers/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import LoaderSpinner from "../src/components/LoaderSpinner/LoaderSpinner";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faSearch,
  faTimes,
  faPlus,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faSearch, faTimes, faPlus, faSmile);

function App() {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
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
    <div className="loader">
      <LoaderSpinner></LoaderSpinner>
    </div>
  ) : (
    <>
      <div>
        <Router>
          <Header token={token} setUser={setUser}></Header>

          <Switch>
            <Route path="/signup">
              <Signup setUser={setUser}></Signup>
            </Route>

            <Route path="/publish">
              <Publish token={token}></Publish>
            </Route>

            <Route path="/login">
              <Login setUser={setUser}></Login>
            </Route>

            <Route path="/offer/:id">
              <Offer token={token}></Offer>
            </Route>

            <Route path="/payment">
              <Elements stripe={stripePromise}>
                <Payment></Payment>
              </Elements>
            </Route>

            <Route path="/">
              <Home token={token}></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
