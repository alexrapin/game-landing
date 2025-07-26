import React from "react";
import "./TheBestSection.scss";
import { LineWithCircles } from "../../shared/LineWithCircles";
import Background from '@/assets/theBest/Background.svg';

export const TheBestSection: React.FC = () => {
  const titles = ['Framework', 'Lemniscap', 'Promotive', 'Smokey The Bera'];

  return (
    <section className="theBestSection">
      <div className="theBestSection__header">
        <h1 className="theBestSection__headerText">Backed By <br />
          <span className="theBestSection__headerText--color">The Best</span>
        </h1>
      </div>
      <div className="theBestSection__content">
        {titles.map((title, index) => (
          <div key={index} className="theBestSection__item item">
            <h2 className="item__title">{title}</h2>
            <LineWithCircles />
            <img
              src={Background}
              alt="minecraftLogo"
              className="item__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};