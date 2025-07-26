import React, { useState } from "react";
import "./PuzzleSelector.scss";
import { puzzles } from "./puzzleData";

export const PuzzleSelector: React.FC = () => {
  const [activePuzzle, setActivePuzzle] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActivePuzzle(prev => (prev === index ? null : index));
  };

  return (
    <div className="wrapper">
      <div className="videoLogo">
        Watch <span style={{color: '#51FFD6'}}>Trailers</span>
      </div>
      <div
        className="background"
        style={{
          backgroundImage: `url(${puzzles[activePuzzle ?? 0].background})`,
        }}
      />
      <div className="videoFrame"></div>
      <div className="puzzle__list">
        {puzzles.map((puzzle, index) => (
          <div key={index} className="puzzle__item">
            <button
              className={`puzzle__button ${activePuzzle === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              <div className="puzzle__info">
                <img
                  className="puzzle__icon"
                  src={puzzle.icon}
                  alt={puzzle.title}
                />
                <span className="puzzle__title">{puzzle.title}</span>
                <img
                  className={`puzzle__arrow ${activePuzzle === index ? "active" : ""}`}
                  src="./images/icons/puzzleArrow.svg"
                  alt="arrow"
                />
              </div>
              <div className={`details ${activePuzzle === index ? "show" : ""}`}>
                <img
                  className="puzzle__image"
                  src={puzzle.background}
                  alt="Preview"
                />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
