import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoaderSpinner from "/Users/Antoine/LeReacteur/REACT/vintedfront/src/components/LoaderSpinner/LoaderSpinner";
import "../Offer/Offer.css";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  return isLoading ? (
    <div className="loader">
      <LoaderSpinner></LoaderSpinner>
    </div>
  ) : (
    <>
      -
      <div className="background">
        <div className="offer_container">
          <div className="offer_picture">
            <img src={data.product_image.secure_url} alt="" />
          </div>
          <div className="offer_data">
            <div className="offer_description">
              <p className="offer_price">{data.product_price}€</p>
              {data.product_details.map((item, index) => {
                const keys = Object.keys(item);
                return (
                  <div className="offer_details_name">
                    {keys[0]}
                    <div className="offer_details_value">{item[keys[0]]}</div>
                  </div>
                );
              })}
            </div>

            <div className="offer_tag">
              <h5 style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
                {data.product_name}
              </h5>
              <p>{data.product_description}</p>
              <div className="offer_owner">
                {data.owner.account.avatar !== undefined && (
                  <img
                    className="avatar_item"
                    src={data.owner.account.avatar.secure_url}
                    alt="item"
                  />
                )}
                <span>{data.owner.account.username}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
