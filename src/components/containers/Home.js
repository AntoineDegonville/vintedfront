import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Item from "../Item";

const Home = () => {
  const [data, setData] = useState({});
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
      <div className="hero">
        <div className="hero_content">
          <h2>Prêts à faire du tri dans vos placards ?</h2>
          <button>Commencez à vendre</button>
        </div>
        <div className="hero_bottom_img"></div>
      </div>
      <div className="item_section">
        <Item data={data} setData={setData}></Item>
      </div>
    </>
  );
};

export default Home;
