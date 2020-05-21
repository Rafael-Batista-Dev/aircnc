import React, { useState } from "react";
import Modal from "react-modal";
import { ModalButtom } from "./style";

Modal.setAppElement("#root");
function SpotsCadModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="modalStyle">
      <ModalButtom onClick={() => setModalIsOpen(true)}>+</ModalButtom>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            width: "40%",
            margin: "auto",
            top: "4rem",
            background: "transparent",
          },

          content: {
            color: "#666363",
            background: "#FAFAFA",
          },
        }}
      >
        <div className="ModalHeadre">Cabeçalho</div>
        <div className="ModalBody">
          <div className="ModalForm">Formulário</div>
        </div>
        <div className="ModalFooter">Footer</div>

        <div>
          <button onClick={() => setModalIsOpen(false)}>Sair</button>
        </div>
      </Modal>
    </div>
  );
}

export default SpotsCadModal;
