import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import "../Modal/Modal.css";

const Modal = ({ username, setHidden, frompublish }) => {
  const history = useHistory();

  return (
    <div className="modal_box">
      Bienvenue {username}
      <div>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            setHidden(false);
            history.push(frompublish.state === undefined ? "/" : "/publish");
          }}
          className="modal_close"
          icon="times"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Modal;
