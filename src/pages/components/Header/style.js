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
  margin-bottom: 2rem;
`;

export const Span = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #424242;
`;

export const Box = styled.div`
  width: 21%;
  float: left;
  font-size: 0;
  padding: 10px;
  transition: all 0.5s ease;
  position: relative;
  &:hover > div {
    opacity: 1;
  }
`;

export const BoxLeft = styled.div`
  width: 45%;
  float: left;
  padding: 10px;
  font-size: 0;
  transition: all 0.5s ease;
  position: relative;
  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  position: absolute;
  top: 90%;
  left: 10%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background: #fff;
  color: #000;
  font-size: 15px;
  text-align: center;
  display: block;
  width: 15%;
  margin: 0 auto;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
  border: 1px solid #666363;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background: #fff;
    color: #ff385c;
    box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.07),
      0 1px 7px 0 rgba(0, 0, 0, 0.02), 0 3px 1px -1px rgba(0, 0, 0, 0.1);
  }
`;
