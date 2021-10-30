import React from "react";
import "./modal.css";

function ModalFinish({ onReinitialize }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <p>Você venceu!!</p>
        <button onClick={onReinitialize}>Jogar novamente</button>
      </div>
    </div>
  );
}

export default ModalFinish;
