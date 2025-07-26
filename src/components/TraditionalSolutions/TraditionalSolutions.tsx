import type React from "react";
import './TraditionalSolutions.scss';
import { PuzzleSelector } from "../PuzzleSelector/PuzzleSelector";

export const TraditionalSolutions: React.FC = () => {
  return (
    <section className="traditionalSolutions">
      <div className="
        traditionalSolutions__titleBlock
        traditionalSolutions__titleBlock--upper
      ">
        <h2 className="traditionalSolutions__subtitle">
          All at a fraction of the cost of
        </h2>
        <h1 className="traditionalSolutions__title">
          Traditional Solutions
        </h1>
      </div>

      <div className="traditionalSolutions__puzzleBlock">
        <PuzzleSelector />
      </div>

      <div className="traditionalSolutions__infoBlock infoBlock">
        <div className="traditionalSolutions__infoBlockContainer">
          <div className="infoBlock__titleBlock">
            <h1 className="infoBlock__titleBlockOne">Data on</h1>
            <h1 className="infoBlock__titleBlockTwo">does</h1>
          </div>
          <p className="infoBlock__p">
            can be embedded with instructions
            <span className="infoBlock__p--bigger"> retrieved instantly and </span>
            <span className="infoBlock__p--medium">
              <span style={{ color: '#feb519' }}>
                shared
              </span> across applications
            </span>
          </p>
          <h3 className="infoBlock__smallTitle">Enabling developers to <span style={{ color: '#0092d2' }}>build onchain services</span> that</h3>
          <h2 className="infoBlock__subTitle"><span style={{ color: '#eb5732' }}>leverage</span> each other's data to</h2>
          <h1 className="infoBlock__title2">unlock new value</h1>
        </div>
      </div>

      <div className="traditionalSolutions__titleBlock">
        <h2 className="traditionalSolutions__subtitle">
          All at a fraction of the cost of
        </h2>
        <h1 className="traditionalSolutions__title">
          Traditional Solutions
        </h1>
      </div>
    </section>
  );
};