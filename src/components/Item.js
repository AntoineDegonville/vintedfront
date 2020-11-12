import React, { useState } from "react";
import { Link } from "react-router-dom";
import Offer from "./containers/Offer";

const Item = ({ data, setData }) => {
  const [itemId, setItemId] = useState("");
  return (
    <div className="container_item">
      {data.offers.map((item, index) => {
        return (
          <div className="section_item">
            <>
              <div className="username_item" key={index}>
                <span>
                  <img
                    className="avatar_item"
                    src={item.owner.account.avatar.secure_url}
                    alt=""
                  />
                </span>
                {item.owner.account.username}{" "}
              </div>

              <div>
                <Link>
                  <img
                    className="picture_item"
                    src={item.product_pictures[0].secure_url}
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <span>{item.product_price}</span>
                <span>
                  {item.product_details.map((item, index) => {
                    return (
                      <>
                        <p>{item.MARQUE}</p>
                        <p>{item.TAILLE}</p>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
