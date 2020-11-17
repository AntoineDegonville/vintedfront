import React, { useState } from "react";
import "../Publish/Publish.css";
import axios from "axios";
import DropzoneComponents from "../../DropzoneComponent/DropzoneComponent";
import { Redirect } from "react-router-dom";

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

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", Number(price));
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("picture", picture);

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
      console.log(error.response);
    }
  };

  return token ? (
    <>
      <div className="background_color">
        <form onSubmit={handleSubmit}>
          <div className="publish_container">
            <h2>Vends ton article</h2>
            <div className="publish_file_section">
              <DropzoneComponents></DropzoneComponents>
            </div>
            <div className="publish_title_section">
              <div className="publish_title_line">
                <p>Titre</p>
                <input
                  placeholder="ex: Petit chat "
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </div>
              <div className="publish_textarea_line">
                <p>Décris ton article</p>
                <textarea
                  placeholder="ex: Déjà porté etc..."
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                ></textarea>
              </div>
            </div>

            <div className="publish_info_section">
              <div className="publish_section_line">
                <p>Marque</p>
                <input
                  placeholder="ex: Adidas"
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
                  placeholder="ex: M / L / XL"
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
                  placeholder="ex: Bleu"
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
                  placeholder="ex: Neuf"
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
                  placeholder="ex: Paris"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  value={city}
                />
              </div>
            </div>
            <div className="publish_price_section">
              <div className="publish_section_line">
                <p>Prix</p>
                <input
                  placeholder="ex: 10.00 €"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  type="text"
                  value={price}
                />
              </div>
            </div>
            <div className="publish_section_line">
              <button type="submit">Ajouter</button>
            </div>
          </div>
        </form>
      </div>
    </>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { fromPublish: true },
      }}
    ></Redirect>
  );
};

export default Publish;
