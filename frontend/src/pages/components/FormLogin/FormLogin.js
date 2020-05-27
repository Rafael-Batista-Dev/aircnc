import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";
import {
  FormLoginSection,
  FormLoginContent,
  FormDescription,
  LoginForm,
  FormLabel,
  FormInput,
  FormButton,
} from "./style";
import logo from "../../../assets/img/logo.svg";

import Aos from "aos";
import "aos/dist/aos.css";

const FormLogin = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let history = useHistory();
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;
    history.push("/profile");

    localStorage.setItem("user", _id);
  }

  return (
    <FormLoginSection style={{ overflowX: "hidden" }}>
      <img
        style={{ marginTop: "2rem" }}
        data-aos="fade-left"
        src={logo}
        alt="aircnc"
      />
      <FormLoginContent data-aos="fade-right">
        <FormDescription>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>Talentos</strong> para sua empresa.
        </FormDescription>

        <LoginForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            id="email"
            placeholder="Seu e-mail"
            type="email"
          />

          <FormButton type="submit">Entrar</FormButton>
        </LoginForm>
      </FormLoginContent>
    </FormLoginSection>
  );
};

export default FormLogin;
