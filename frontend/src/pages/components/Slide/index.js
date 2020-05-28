import React, { Component } from "react";
import { SliderSection, Box, Image } from "./style";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ff385c",
        borderRadius: "50%",
        padding: "1px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ff385c",
        borderRadius: "50%",
        padding: "1px",
      }}
      onClick={onClick}
    />
  );
}

export default class ItemSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
        <br />
      </SliderSection>
    );
  }
}
