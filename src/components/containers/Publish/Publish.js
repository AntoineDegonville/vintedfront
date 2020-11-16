import React, { useState } from "react";
import "../Publish/Publish.css";
import axios from "axios";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  console.log(token);
  console.log(picture);
  console.log(title);
  console.log(description);
  console.log(brand);
  console.log(size);
  console.log(color);
  console.log(condition);
  console.log(city);
  console.log(price);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("picture", picture);

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="publish_container">
          <h2>Vends ton article</h2>
          <div className="publish_section">
            <input
              type="file"
              onChange={(e) => {
                setPicture(e.target.files);
              }}
            />
          </div>
          <div className="publish_section">
            <div className="publish_section_line">
              <p>Title</p>
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </div>
            <div className="publish_section_line">
              <p>Décris ton article</p>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              ></textarea>
            </div>
          </div>
          <div className="publish_section">
            <div className="publish_section_line">
              <p>Marque</p>
              <input
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
                type="text"
                value={brand}
              />
            </div>
            <div className="publish_section_line">
              <p>Taille</p>
              <input
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                type="text"
                value={size}
              />
            </div>
            <div className="publish_section_line">
              <p>Couleur</p>
              <input
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                type="text"
                value={color}
              />
            </div>
            <div className="publish_section_line">
              <p>Etat</p>
              <input
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
                type="text"
                value={condition}
              />
            </div>
            <div className="publish_section_line">
              <p>Lieu</p>
              <input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
                value={city}
              />
            </div>
          </div>
          <div className="publish_section">
            <div className="publish_section_line">
              <p>Prix</p>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="text"
                value={price}
              />
            </div>
            <input type="checkbox" />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Publish;
