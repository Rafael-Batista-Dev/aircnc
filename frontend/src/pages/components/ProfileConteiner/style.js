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
