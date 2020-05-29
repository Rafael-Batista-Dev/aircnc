import React, { useEffect } from "react";

import {
  ContactSection,
  FormContent,
  DadosContent,
  FormDescription,
  Title,
  List,
  LoginForm,
  FormLabel,
  FormInput,
  FormButton,
} from "./style";

import Aos from "aos";
import "aos/dist/aos.css";

const ContatForm = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContactSection>
      <DadosContent data-aos="fade-right">
        <Title>Contato</Title>
        <FormDescription>
          Entre em contato com o <strong>administrador</strong> da aircnc.
        </FormDescription>

        <i className="icon fa fa-map-marker fa-2x" aria-hidden="true"></i>
        <List>
          <strong>Rua:</strong> Centro.
        </List>

        <i className="icon fa fa-map-marker fa-2x" aria-hidden="true"></i>
        <List>
          <strong>Bairro:</strong> Centro.
        </List>

        <i className="icon fa fa-map-marker fa-2x" aria-hidden="true"></i>
        <List>
          <strong>Cidade:</strong> Juazeiro do Norte - CE
        </List>

        <i className="icon fa fa-phone fa-2x" aria-hidden="true"></i>
        <List>
          <strong>(88)</strong> 0000-0000
        </List>

        <i className="icon fa fa-whatsapp fa-2x" aria-hidden="true"></i>
        <List>
          <strong>(88)</strong> 9.0000-0000
        </List>

        <i className="icon fa fa-envelope fa-2x" aria-hidden="true"></i>
        <List>
          <strong>E-mail</strong> rafael@aircnc.com.br
        </List>
      </DadosContent>

      <FormContent data-aos="fade-left">
        <LoginForm>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <FormInput id="name" placeholder="Seu Nome" type="text" />
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput id="email" placeholder="Seu e-mail" type="email" />
          <FormLabel htmlFor="assunto">Assunto</FormLabel>
          <FormInput
            style={{ marginBottom: "3rem" }}
            id="assunto"
            placeholder="Seu Assunto"
            type="text"
          />
          <FormButton type="submit">Entrar</FormButton>
        </LoginForm>
      </FormContent>
    </ContactSection>
  );
};

export default ContatForm;
