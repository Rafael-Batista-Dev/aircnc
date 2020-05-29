import styled from "styled-components";

export const AboutSection = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 4rem;
  padding: 50px 0;
  overflow: hidden;
`;
export const AboutLeft = styled.div`
  width: 45%;
  float: right;
  padding: 20px;
`;

export const AboutRight = styled.div`
  width: 45%;
  float: left;
  padding: 20px;
`;

export const AboutList = styled.ul`
  list-style: none;
`;
export const AboutItem = styled.li`
  margin-bottom: 8px;
`;
export const Span = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
  color: #4e5053;
`;

export const AboutDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 4rem;
  color: #696969;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  color: #696969;
`;

export const Btn = styled.button`
  border: 0;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;
  border-radius: 4px;
  height: 45px;
  padding: 0 20px;
  font-size: 16px;
  background: #ff385c;
  outline-style: none;
  color: #fff;
  box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.07),
    0 1px 7px 0 rgba(0, 0, 0, 0.02), 0 3px 1px -1px rgba(0, 0, 0, 0.1);
  &:hover {
    transition: all 0.4s ease;
    color: #ff385c;
    background: #fff;
    outline-style: none;
    border-width: 1px;
    border-style: solid;
    border-color: #ff385c;
  }}
`;
