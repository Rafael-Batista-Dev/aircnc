import styled from "styled-components";

export const ModalButtom = styled.button`
  position: fixed;
  top: 90%;
  left: 95%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
  padding: 10px 20px;
  font-size: 44px;
  text-align: center;
  display: block;
  width: 4%;
  margin: 0 auto;
  padding: 8px;
  line-height: 40px;
  border-radius: 50%;
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
