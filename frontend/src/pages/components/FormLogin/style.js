import styled from "styled-components";

export const FormLoginSection = styled.div`
  margin: auto;
  max-width: 450;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: center;
  margin-top: 8rem;
`;

export const FormLoginContent = styled.div`
  width: 25%;
  margin: auto;
  margin-top: 2rem;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 0px 0.4em #666;
  -webkit-box-shadow: 0px 0px 0.4em #666;
  -moz-box-shadow: 0px 0px 0.4em #666;
`;

export const FormDescription = styled.p`
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  margin-bottom: 30px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const FormInput = styled.input`
  border: 1px solid #ddd;
  font-weight: bold;
  margin-bottom: 1rem;
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

export const FormButton = styled.button`
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
  }
`;
