import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(data);

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
    <p>En cours de chargement</p>
  ) : (
    <>
      <div>
        <div>
          <img src={data.product_image.secure_url} alt="" />
        </div>
        <p>{data.product_price}</p>
        {data.product_details.map((item, index) => {
          const keys = Object.keys(item);
          return (
            <div>
              {keys[0]}
              {item[keys[0]]}
            </div>
          );
        })}
        <div>
          <p>{data.product_name}</p>
          <p>{data.product_description}</p>
          <p>
            <span>
              <img src={data.owner.account.avatar.secure_url} alt="" />
            </span>{" "}
            {data.owner.account.username}
          </p>
        </div>
      </div>
    </>
  );
};

export default Offer;
