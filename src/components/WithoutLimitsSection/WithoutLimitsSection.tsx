import React from "react";
import './WithoutLimitsSection.scss';
import { LineWithCircles } from "../../shared/LineWithCircles";

export const WithoutLimitsSection: React.FC = () => {
  return (
    <section className="withoutLimitsSection">
      <div className="withoutLimitsSection__block">
        <div className="withoutLimitsSection__header">
          <p className="withoutLimitsSection__headerP">WHY IRYS</p>
          <h2 className="withoutLimitsSection__headerSub">Purpose Built to SCALE,</h2>
          <h1 className="withoutLimitsSection__headerMain">Without <br /> Limits</h1>
        </div>
        <LineWithCircles />
        <div className="withoutLimitsSection__content">
          <div className="withoutLimitsSection__contentImgWrapper">
            <img 
              className="withoutLimitsSection__contentImg"
              src="./images/icons/star.svg" 
              alt="star" 
            />
          </div>
          <div>
            <p className="withoutLimitsSection__contentP">
              The demand for high-performance onchain data is surging across AI, IP, and consumer
              applications, but today’s infrastructure wasn’t built to handle it.
              <br /> <br />
              Irys meets this need by unlocking a network of composable utilities—where data is
              structured, shared, and monetized across applications. More data fuels more services,
              creating compounding value and accelerating adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 