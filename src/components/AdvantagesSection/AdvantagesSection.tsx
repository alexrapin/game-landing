import type React from "react";
import './AdvantagesSection.scss';

export const AdvantagesSection: React.FC = () => {
  return (
    <section className="advantages">
      <div className="advantages__section">
        <div className="advantages__sectionImgWrapper">
          <img
            className="advantages__sectionImg"
            src="./images/advantages/ice.png"
            alt="ice"
          />
        </div>
        <div className="advantages__sectionHeader">
          <span className="advantages__sectionHeader--sub1">
            HIGH
          </span>
          <h1 className="advantages__sectionHeader--header">PERFORMANCE</h1>
        </div>
        <div className="advantages__sectionFigure">
          <div className="
            advantages__sectionCircle 
            advantages__sectionCircle--one
            advantages__sectionCircle--blue
            "></div>
          <div className="advantages__sectionLine advantages__sectionLine--blue"></div>
          <div className="
            advantages__sectionCircle 
            advantages__sectionCircle--two
            advantages__sectionCircle--blue
            "></div>
        </div>
        <p className="advantages__sectionText">
          Onchain data should move faster, cost less, and do more. Irys
          makes that possible. Cheaper retrieval costs unlock programmable
          data and enable onchain services that weren`t possible before.
        </p>
      </div>

      <div className="advantages__section">
        <div className="advantages__sectionImgWrapper">
          <img
            className="advantages__sectionImg"
            src="./images/advantages/pig.png"
            alt="pig"
          />
        </div>
        <div className="advantages__sectionHeader">
          <span className="advantages__sectionHeader--sub2">
            COMPOSABLE
          </span>
          <h1 className="advantages__sectionHeader--header">UTILITIES</h1>
        </div>
        <div className="advantages__sectionFigure">
          <div className="advantages__sectionCircle advantages__sectionCircle--one"></div>
          <div className="advantages__sectionLine advantages__sectionLine"></div>
          <div className="advantages__sectionCircle advantages__sectionCircle--two"></div>
        </div>
        <p className="advantages__sectionText">
          Irys is a network of utilities where storage and execution enable
          onchain services to work together—permissionlessly. Projects can
          launch new utilities on Irys, while entire ecosystems can integrate
          with our data layer—creating a shared foundation for AI and
          beyond.
        </p>
      </div>

      <div className="advantages__section">
        <div className="advantages__sectionImgWrapper">
          <img
            className="advantages__sectionImg"
            src="./images/advantages/gast.png"
            alt="gast"
          />
        </div>
        <div className="advantages__sectionHeader">
          <span className="advantages__sectionHeader--sub3">
            COMPOSABLE
          </span>
          <h1 className="advantages__sectionHeader--header">UTILITIES</h1>
        </div>
        <div className="advantages__sectionFigure">
          <div className="
            advantages__sectionCircle 
            advantages__sectionCircle--one
            "></div>
          <div className="advantages__sectionLine advantages__sectionLine"></div>
          <div className="
            advantages__sectionCircle 
            advantages__sectionCircle--two
            "></div>
        </div>
        <p className="advantages__sectionText">
          Irys is a network of utilities where storage and execution enable
          onchain services to work together—permissionlessly. Projects can
          launch new utilities on Irys, while entire ecosystems can integrate
          with our data layer—creating a shared foundation for AI and
          beyond.
        </p>
      </div>

      <div className="advantages__section">
        <div className="advantages__sectionImgWrapper">
          <img
            className="advantages__sectionImg"
            src="./images/advantages/marketplace.png"
            alt="marketplace"
          />
        </div>
        <div className="advantages__sectionHeader">
          <span className="advantages__sectionHeader--sub4">
            HIGH
          </span>
          <h1 className="advantages__sectionHeader--header">PERFORMANCE</h1>
        </div>
        <div className="advantages__sectionFigure">
          <div className="
            advantages__sectionCircle 
            advantages__sectionCircle--one
            advantages__sectionCircle--blue
            "></div>
          <div className="advantages__sectionLine advantages__sectionLine--blue"></div>
          <div className="
            advantages__sectionCircle 
            advantages__sectionCircle--two
            advantages__sectionCircle--blue
            "
          ></div>
        </div>
        <p className="advantages__sectionText">
          Onchain data should move faster, cost less, and do more. Irys
          makes that possible. Cheaper retrieval costs unlock programmable
          data and enable onchain services that weren’t possible before.
        </p>
      </div>
    </section>
  );
};