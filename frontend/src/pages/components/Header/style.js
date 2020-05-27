import styled from "styled-components";

export const PortfolioSection = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 20px;
  overflow: hidden;
`;

export const PortfolioTitle = styled.h1`
  padding: 10px;
  margin-top: 6rem;
  margin-bottom: 1rem;
`;

export const Span = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #696969;
`;

export const BoxLeft = styled.div`
  width: 49%;
  float: left;
  font-size: 0;
  margin-left: 7px;
  padding: 5px;
  transition: all 0.5s ease;
  position: relative;
  &:hover > div {
    opacity: 1;
  }
`;

export const Box = styled.div`
  width: 23.7%;
  float: right;
  padding: 5px;
  font-size: 0;
  transition: all 0.5s ease;
  position: relative;
  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.07),
    0 1px 7px 0 rgba(0, 0, 0, 0.01), 0 3px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  position: absolute;
  top: 91.5%;
  left: 10%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
  padding: 10px 20px;
  font-size: 15px;
  text-align: center;
  display: block;
  width: 15%;
  margin: 0 auto;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  border: none;
  background: #ff385c;
  color: #fff;
  outline-style: none;
  box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.07),
    0 1px 7px 0 rgba(0, 0, 0, 0.02), 0 3px 1px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease;
    color: #ff385c;
    background: #fff;
    outline-style: none;
    border-width: 1px;
    border-style: solid;
    border-color: #ff385c;
  }
`;
