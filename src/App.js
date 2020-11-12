import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import Home from "./components/containers/Home";
import Offer from "./components/containers/Offer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Item from "./components/Item";

function App() {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

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
        <Header></Header>
        <Router>
          <Switch>
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
