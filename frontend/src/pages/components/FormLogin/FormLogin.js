import React from "react";
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
  return (
    <FormLoginSection>
      <img src={logo} alt="aircnc" />
      <FormLoginContent>
        <FormDescription>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>Talentos</strong> para sua empresa.
        </FormDescription>

        <LoginForm>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput id="email" placeholder="Seu e-mail" type="email" />

          <FormButton type="submit">Entrar</FormButton>
        </LoginForm>
      </FormLoginContent>
    </FormLoginSection>
  );
}

export default FormLogin;
