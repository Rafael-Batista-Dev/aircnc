import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import api from "../../../services/api";

import Modal from "react-modal";
import camera from "../../../assets/img/camera.svg";

import {
  ModalButtom,
  ModalHeader,
  FormLeft,
  FormRight,
  ModalBody,
  ModalSpan,
  ButtomClose,
  FormLabel,
  FormInput,
  ButtonSubmit,
  ThumbnailSpan,
  ThumbnailInput,
} from "./style";

Modal.setAppElement("#root");

function SpotsCadModal() {
  let history = useHistory();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit() {
    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id },
    });

    history.push("/profile");
  }

  return (
    <>
      <ModalButtom onClick={() => setModalIsOpen(true)}>+</ModalButtom>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            width: "70%",
            margin: "auto",
            top: "6rem",
            background: "transparent",
          },

          content: {
            color: "#666363",
            background: "#FAFAFA",
          },
        }}
      >
        <ModalHeader className="ModalHeadre">Cadastrar Spot</ModalHeader>
        <ModalBody className="ModalBody">
          <form onSubmit={handleSubmit}>
            <FormLeft>
              <ThumbnailSpan
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
              >
                <ThumbnailInput
                  type="file"
                  onChange={(event) => setThumbnail(event.target.files[0])}
                />
                <img style={{ marginTop: "9rem" }} src={camera} alt="camera" />
              </ThumbnailSpan>
            </FormLeft>

            <FormRight>
              <FormLabel htmlFor="company">EMPRESA *</FormLabel>
              <FormInput
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />

              <FormLabel htmlFor="techs">
                TECNOLOGIA * <ModalSpan>(sepadaras por vírgula)</ModalSpan>
              </FormLabel>
              <FormInput
                id="techs"
                placeholder="Quais tecnologias"
                value={techs}
                onChange={(event) => setTechs(event.target.value)}
              />

              <FormLabel htmlFor="price">
                VALOR DA DIÁRIA *{" "}
                <ModalSpan>(em branco para GRATUITO)</ModalSpan>
              </FormLabel>
              <FormInput
                id="price"
                placeholder="R$ Valor cobrado por dia"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
              <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
            </FormRight>
          </form>
        </ModalBody>
        <div>
          <ButtomClose onClick={() => setModalIsOpen(false)}>X</ButtomClose>
        </div>
      </Modal>
    </>
  );
}

export default SpotsCadModal;
