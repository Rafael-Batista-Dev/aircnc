import React, { useState } from "react";
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

function FormLogin() {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);
  }

  return (
    <FormLoginSection>
      <img src={logo} alt="aircnc" />
      <FormLoginContent>
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
}

export default FormLogin;
