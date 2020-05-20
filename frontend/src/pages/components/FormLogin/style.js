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
  height: 45px;
  padding: 0 15px;
  font-size: 16px;
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
  color: #fff;
  &:hover {
    background: #f13255;
  }
`;
