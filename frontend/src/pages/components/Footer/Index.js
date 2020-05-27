import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { FooterContainer } from "./style";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <FooterContainer data-aos="fade-up" style={{ textAlign: "center" }}>
      &copy;&nbsp;aircnc Brasil - Todos od Direitos Reservados
    </FooterContainer>
  );
};

export default Footer;
