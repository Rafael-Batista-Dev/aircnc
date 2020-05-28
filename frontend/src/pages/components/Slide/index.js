import React, { Component } from "react";
import { SliderSection, Box, Image } from "./style";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ItemSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <SliderSection>
        <Slider {...settings}>
          <Box>
            <Image src="img/cowork-01.jpg" alt="" />
          </Box>

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
        </Slider>
      </SliderSection>
    );
  }
}
