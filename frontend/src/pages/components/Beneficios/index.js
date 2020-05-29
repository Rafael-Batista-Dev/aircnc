import React from "react";
import Lottie from "react-lottie";
import checkmarkLogo from "../../../assets/img/checkmark.png";

import animationData from "../../../assets/img/office-2.json";
import {
  BenefitSection,
  BenefitContent,
  LottieContent,
  BenefitDesc,
  Logo,
  Title,
} from "./style";

const beneficios = () => {
  return (
    <div>
      <BenefitSection>
        <div className="container">
          <BenefitContent>
            <Title>5 Benefícios do espaço compartilhado</Title>

            <Logo src={checkmarkLogo} />
            <BenefitDesc>
              Custo benefícios enorme sem montar seu próprio escritório.
            </BenefitDesc>

            <Logo src={checkmarkLogo} />
            <BenefitDesc>
              Ambientes que promovem a criatividade e produtividade.
            </BenefitDesc>

            <Logo src={checkmarkLogo} />
            <BenefitDesc>
              Você encontrará profissionais de TI e promover Networking.
            </BenefitDesc>

            <Logo src={checkmarkLogo} />
            <BenefitDesc>
              Diferentes ambientes, de acordo com a sua “vibe” e techs.
            </BenefitDesc>

            <Logo src={checkmarkLogo} />
            <BenefitDesc>
              Novar oportunidades para mentorias profissional e técnica.
            </BenefitDesc>
          </BenefitContent>

          <LottieContent>
            <div className="lottie-json">
              <Lottie
                width={500}
                height={500}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              ></Lottie>
            </div>
          </LottieContent>
        </div>
      </BenefitSection>
    </div>
  );
};

export default beneficios;
