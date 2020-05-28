import styled from "styled-components";

export const PlanSection = styled.div`
  width: 50%;
  height: 500px;
  margin: auto;
  margin-top: 7rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 1em #d3d3d3;
  -webkit-box-shadow: 0px 0px 1em #d3d3d3;
  -moz-box-shadow: 0px 0px 1em #d3d3d3;
  background: #fff;
  color: #333;
  display: grid;
  grid-gap: 1px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const CardTop = styled.div`
  height: 25%;
  width: 100%;
  background: #ff385c;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardCost = styled.div`
  margin-bottom: 1rem;
`;

export const CardValue = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

export const CardMonth = styled.div`
  font-size: 1rem;
`;

export const CardLines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardLine = styled.div`
  margin-bottom: 3px;
  height: 4px;
  background: #e0e0e0;
`;

export const Bars = styled.div`
  height: 85%;
  width: 95%;
  background: white;
  box-shadow: 3px 3px 5px rgba(128, 128, 128, 0.2);
  grid-column: 1 / -1;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const StatInfo = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #888;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
