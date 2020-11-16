import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Dropzone from "react-dropzone";
import "../DropzoneComponent/DropzoneComponent.css";

const DropzoneComponent = () => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div className="dropzone_section" {...getRootProps()}>
            <input {...getInputProps()} />
            <div>
              <FontAwesomeIcon
                icon="plus"
                style={{ padding: 10 }}
              ></FontAwesomeIcon>
              Ajoute une photo
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default DropzoneComponent;
