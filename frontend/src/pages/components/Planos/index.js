import React from "react";
import {
  PlanSection,
  CardTop,
  CardCost,
  CardValue,
  CardMonth,
  CardLines,
  CardLine,
  StatInfo,
} from "./style";

const planos = () => {
  return (
    <>
      <hr />
      <PlanSection>
        <div className="card card-1">
          <CardTop>Urano</CardTop>
          <div className="card-info">
            <CardCost>
              <CardValue>R$ 500</CardValue>
              <CardMonth>Por mês</CardMonth>
            </CardCost>
            <CardLines>
              <CardLine style={{ width: "80px" }}></CardLine>
              <CardLine style={{ width: "50px" }}></CardLine>
              <CardLine style={{ width: "90px" }}></CardLine>
              <CardLine style={{ width: "70px" }}></CardLine>
            </CardLines>
          </div>
        </div>
        <div className="card card-2">
          <CardTop>Saturno</CardTop>
          <div className="card-info">
            <CardCost>
              <CardValue>R$ 1.500</CardValue>
              <CardMonth>Por mês</CardMonth>
            </CardCost>
            <CardLines>
              <CardLine style={{ width: "90px" }}></CardLine>
              <CardLine style={{ width: "50px" }}></CardLine>
              <CardLine style={{ width: "100px" }}></CardLine>
              <CardLine style={{ width: "70px" }}></CardLine>
            </CardLines>
          </div>
        </div>
        <div className="card card-3">
          <CardTop>Júpiter</CardTop>
          <div className="card-info">
            <CardCost>
              <CardValue>R$ 3.000</CardValue>
              <CardMonth>Por mês</CardMonth>
            </CardCost>
            <CardLines>
              <CardLine style={{ width: "90px" }}></CardLine>
              <CardLine style={{ width: "50px" }}></CardLine>
              <CardLine style={{ width: "100px" }}></CardLine>
              <CardLine style={{ width: "70px" }}></CardLine>
            </CardLines>
          </div>
        </div>

        <div className="bars">
          <div className="stat" style={{ marginTop: "1rem" }}>
            <StatInfo>
              <div className="stat-min">5 Spots</div>
              <div className="stat-max">50 Spots</div>
            </StatInfo>
            <div className="stat-bar bar-1">
              <span></span>
            </div>
          </div>

          <div className="stat">
            <StatInfo>
              <div className="stat-min">1 Usuário</div>
              <div className="stat-max">10 Usuário(s)</div>
            </StatInfo>
            <div className="stat-bar bar-2">
              <span></span>
            </div>
          </div>

          <div className="stat">
            <StatInfo>
              <div className="stat-min">3 Relatório</div>
              <div className="stat-max">+ 25 Relatórios</div>
            </StatInfo>
            <div className="stat-bar bar-3">
              <span></span>
            </div>
          </div>
        </div>
      </PlanSection>
    </>
  );
};

export default planos;
