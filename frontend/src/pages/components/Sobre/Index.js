import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  AboutSection,
  AboutLeft,
  AboutRight,
  AboutDesc,
  Title,
  SubTitle,
  Btn,
} from "./style";

const Sobre = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <hr />
      <AboutSection>
        <div class="container">
          <AboutRight data-aos="fade-right">
            <Title>
              Trazendo o Vale do Silício ao Mundo, e o Mundo ao Vale do Silício
            </Title>

            <SubTitle>IMAGINE UMA PLATAFORMA DE INOVAÇÃO </SubTitle>

            <AboutDesc>
              Uma coleção de recursos que oferecem oportunidades quase infinitas
              para acelerar o crescimento. Apoiamos empreendedores em mais de
              100 países, conectando startups, corporações globais e inovadores.
            </AboutDesc>
            <SubTitle>
              AJUDAMOS OS EMPRESÁRIOS A FAZER SUA PRÓPRIA SORTE
            </SubTitle>

            <AboutDesc>
              O que outras pessoas estão dizendo Nosso compromisso é com
              organizações e indivíduos - fornecendo serviços e programas que
              conectam, inspiram, educam e financiam oportunidades de negócios
              de alto impacto
            </AboutDesc>
          </AboutRight>

          <AboutLeft data-aos="fade-left">
            <SubTitle>Inove como uma startup! </SubTitle>

            <AboutDesc>
              A aircnc permite à liderança do G2000 criar uma cultura de
              inovação e equipar seus funcionários com as ferramentas, recursos
              e ambiente colaborativo necessários para impulsionar a inovação.
            </AboutDesc>
            <SubTitle>
              SCOUTING DE TECNOLOGIA O que outras pessoas estão dizendo
            </SubTitle>

            <AboutDesc>
              Alavancando sua rede global de startups e recursos de pesquisa de
              classe mundial.
            </AboutDesc>

            <SubTitle>
              OFICINAS DE IDEIA E INSIGHT O que outras pessoas estão dizendo
            </SubTitle>

            <AboutDesc>
              A aircnc oferece workshops de 1 e 2 dias que fornecem aos seus
              parceiros corporativos insights focados em tecnologias,
            </AboutDesc>

            <Btn>
              Saiba mais{" "}
              <i
                style={{ marginLeft: "10px" }}
                class="fa fa-arrow-right"
                aria-hidden="true"
              ></i>
            </Btn>
          </AboutLeft>
        </div>
      </AboutSection>
    </>
  );
};

export default Sobre;
