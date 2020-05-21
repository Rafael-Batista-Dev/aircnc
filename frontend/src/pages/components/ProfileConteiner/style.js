import styled from "styled-components";

export const ProfileSection = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 20px;
  overflow: hidden;
`;

export const ProfileTitle = styled.h1`
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

export const SpotUl = styled.ul`
  margin: auto;
  list-style: none;
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
`;

export const Card = styled.div`
  margin-top: 2rem;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0px 0px 1em #bbbbbb;
  -webkit-box-shadow: 0px 0px 1em #bbbbbb;
  -moz-box-shadow: 0px 0px 1em #bbbbbb;
`;

export const SpoLi = styled.li``;

export const SpoHeader = styled.header`
  width: 90%;
  height: 180px;
  margin: auto;
  margin-top: -2rem;
  display: grid;
  border-radius: 8px;
  background-size: cover;
  margin-bottom: 20px;
  box-shadow: 0px 0px 1em #666;
  -webkit-box-shadow: 0px 0px 1em #666;
  -moz-box-shadow: 0px 0px 1em #666;
`;

export const SpoStrong = styled.strong`
  padding: 20px;
  margin-bottom: 20px;
  font-size: 22px;
  color: #666363;
`;

export const SpoSpan = styled.span`
  padding: 20px;
  font-size: 16px;
  color: #ff385c;
`;

export const SpotButtom = styled.button`
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
