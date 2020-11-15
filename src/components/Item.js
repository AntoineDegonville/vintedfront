import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
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

              <Link to={`/offer/${item._id}`}>
                <img
                  className="picture_item"
                  src={item.product_pictures[0].secure_url}
                  alt=""
                />
              </Link>

              <div className="item_description">
                <span style={{ paddingBottom: 20, fontWeight: "bold" }}>
                  {item.product_price}€
                </span>
                <span>
                  {item.product_details.map((item, index) => {
                    return (
                      <>
                        <p>{item.TAILLE}</p>
                        <p>{item.MARQUE}</p>
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
