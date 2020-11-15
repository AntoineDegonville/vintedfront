import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Modal = ({ username, setHidden }) => {
  const history = useHistory();
  return (
    <div className="modal_box">
      Bienvenue {username}
      <div>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            setHidden(false);
            history.push("/home");
          }}
          className="modal_close"
          icon="times"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Modal;
