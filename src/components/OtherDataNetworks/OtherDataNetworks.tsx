import type React from "react";
import './OtherDataNetworks.scss';
import { Slider } from "../Slider/Slider";

export const OtherDataNetworks: React.FC = () => {
  return (
    <section className="otherDataNetworks">
      <div className="otherDataNetworks__headerBlock headerBlock">
        <div className="headerBlock__top">
          <h2 className="headerBlock__top--one">OTHER DATA NETWORKS</h2>
          <h2 className="headerBlock__top--two">ONLY STORE DATA</h2>
        </div>

        <h1 className="headerBlock__mainHeader">
          <span style={{ fontWeight: '600', fontStyle: 'italic' }}>
            DOES TOO
          </span> DOES TOO
        </h1>

        <div className="headerBlock__middle">
          <h4 className="headerBlock__middle--one">BUT
            <span style={{ color: '#feb519' }}> FASTER</span>,
            <span style={{ color: '#eb5732' }}> SHEAPER</span>,
            AND WITH A
          </h4>
          <h4 className="headerBlock__middle--two"><span style={{ color: '#0092d2' }}>
            NATIVE EXECUTION LAYER</span> THAT
          </h4>
        </div>

        <h3 className="headerBlock__bottom">MAKES DATA
          <span style={{ color: '#5bf8da' }}> PROGRAMMABLE</span>
        </h3>
      </div>

      <div className="otherDataNetworks__slider">
        <Slider />
      </div>
    </section>
  );
};