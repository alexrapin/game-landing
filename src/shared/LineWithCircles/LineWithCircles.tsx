import type React from "react";
import './lineWithCircles.scss';

export const LineWithCircles: React.FC = () => {
  return (
      <div className="sectionFigure">
        <div className="
            sectionFigure__circle 
            sectionFigure__circle--one
            "></div>
        <div className="sectionFigure__line"></div>
        <div className="
            sectionFigure__circle 
            sectionFigure__circle--two
            "></div>
      </div>
  )
}