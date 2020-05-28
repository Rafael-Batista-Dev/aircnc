import styled from "styled-components";

export const SliderSection = styled.div`
  width: 75.4%;
  padding: 20px;
  margin: auto;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0px 0px 0.4em #d3d3d3;
  -webkit-box-shadow: 0px 0px 0.4em #d3d3d3;
  -moz-box-shadow: 0px 0px 0.4em #d3d3d3;
  background: #fff;
  color: #333;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  transition: all 0.5s ease;
  position: relative;
  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  padding: 10px;
  width: 90%;
  border-radius: 8px;
  box-shadow: 0px 0px 0.4em #d3d3d3;
  -webkit-box-shadow: 0px 0px 0.4em #d3d3d3;
  -moz-box-shadow: 0px 0px 0.4em #d3d3d3;
`;
