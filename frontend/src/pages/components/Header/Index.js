import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  Box,
  BoxLeft,
  Image,
  Button,
} from "./style";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <PortfolioSection data-aos="fade-down">
      <PortfolioTitle>
        <Span>Como é trabalhar em um coworking?</Span>
      </PortfolioTitle>

      <div className="box">
        <BoxLeft>
          <Image src="img/cowork-01.jpg" alt="" />
        </BoxLeft>

        <Box>
          <Image src="img/cowork-02.jpg" alt="" />
        </Box>

        <Box>
          <Image src="img/cowork-03.jpg" alt="" />
        </Box>

        <Box>
          <Image src="img/cowork-04.jpg" alt="" />
        </Box>

        <Box>
          <Image src="img/cowork-05.jpg" alt="" />
        </Box>

        <Button>
          Todas as fotos{" "}
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </Button>
      </div>
    </PortfolioSection>
  );
};

export default Header;
