import type React from "react";
import './Footer.scss';
import { LineWithCircles } from "../../shared/LineWithCircles";

export const Footer: React.FC = () => {
  const links = ['Home', 'Core Features', 'Connect Hub',
    'Learn Hub', 'Faucet', 'Explorer', 'Ecosystem', 'Blog'];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logos">
          <div className="footer__esrb">
            <img
              className="footer__image"
              src="./images/footer/esrb.png"
              alt="Everyone10+"
            />
          </div>
          <div className="footer__mjxb">
            <img
              className="footer__imageGroup"
              src="./images/footer/mojang.png"
              alt="mojang"
            />
            <img
              className="footer__imageGroup"
              src="./images/footer/xbox.png"
              alt="xbox"
            />
          </div>
        </div>
        <div className="footer__linkBlock">
          <div className="footer__line"></div>
          <div className="footer__linkTitle">Links</div>
          <div className="footer__linkContainer">
            {links.map((link, index) => (
              <div key={index} className="footer__linkContainer">
                <a className="footer__link" href='#top'>{link}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__connect">
          <div className="footer__connectTitle">Connect</div>
          <div className="footer__connectLinks">
            <div className="footer__connectWrapper"></div>
            <a className="footer__connectWrapper" href='#top'>
              <img
                src="./images/logos/Discord.svg"
                alt="DiscordLogo"
                className="footer__connectLogo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__lineWrap">
        <LineWithCircles />
      </div>
      <div className="footer__end">
        <div className="footer__endText">© Irys.xyz 2025</div>
        <ul className="footer__endList">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Cookies</li>
        </ul>
      </div>

    </footer>
  );
}