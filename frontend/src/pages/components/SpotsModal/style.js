import styled from "styled-components";

export const FormLeft = styled.div`
  width: 49%;
  float: left;
  font-size: 0;
  position: relative;
`;

export const FormRight = styled.div`
  width: 49%;
  float: right;
  font-size: 0;
  position: relative;
`;

export const ModalHeader = styled.div`
  text-align: center;
  font-size: 24px;
  padding: 20px;
  background: #ff385c;
  border-radius: 4px;
  color: #fff;
`;

export const ModalBody = styled.div`
  margin-top: 2rem;
`;

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

export const ThumbnailSpan = styled.label`
  border: 1px dashed #ddd;
  background-size: cover;
  margin-bottom: 1rem;
  cursor: pointer;
  height: 300px;
  display: flax;
  justify-content: center;
  align-item: center;
`;

export const ThumbnailInput = styled.input`
  display: none;
`;

export const ButtomClose = styled.button`
  position: fixed;
  top: 20%;
  left: 82%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  display: block;
  width: 2.2%;
  padding: 6px;
  margin: 0 auto;
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

export const FormLabel = styled.label`
  font-size: 14px;
  color: #444;
  font-weight: bold;
`;

export const ModalSpan = styled.span`
  font-size: 12px;
  color: #ff385c;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 94%;
  border: 1px solid #ddd;
  font-weight: bold;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  border-radius: 4px;
  color: #5a5c5f;
  height: 45px;
  padding: 0 10px;
  outline-style: none;
  font-size: 16px;

  &:hover {
    transition: all 0.4s ease;
    border-width: 1px;
    border-style: solid;
    outline-style: none;
    border-color: #ff385c;
  }
`;

export const ButtonSubmit = styled.button`
  border: 0;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
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
  }
`;
