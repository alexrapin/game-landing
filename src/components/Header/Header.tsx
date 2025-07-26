import type React from "react";
import './Header.scss';

export const Header: React.FC = () => {
  const socialIcons = [
    { alt: 'YouTube', src: './images/logos/YouTube.svg', href: 'https://youtube.com' },
    { alt: 'Instagram', src: './images/logos/Instagram.svg', href: 'https://instagram.com' },
    { alt: 'Facebook', src: './images/logos/Facebook.svg', href: 'https://facebook.com' },
    { alt: 'X', src: './images/logos/X.svg', href: 'https://x.com' },
    { alt: 'TikTok', src: './images/logos/TikTok.svg', href: 'https://tiktok.com' },
    { alt: 'Viber', src: './images/logos/Viber.svg', href: 'https://viber.com' },
    { alt: 'Discord', src: './images/logos/Discord.svg', href: 'https://discord.com' }
  ];


  return (
    <header className="mainHeader" id="top">
      <nav className="mainNav">
        <ul className="mainNav__list">
          <li className="mainNav__listItem">Features</li>
          <li className="mainNav__listItem">Social</li>
          <li className="mainNav__listItem">Build</li>
          <div className="mainNav__line"></div>
          <div className="mainNav__circle"></div>
        </ul>
      </nav>

      <div className="mainHeader__centerContent">
        <h2 className="mainHeader__subtitle">$3 Trillion in Data Undiscovered</h2>
        <h1 className="mainHeader__title">Until Now</h1>
      </div>

      <div className="mainHeader__bottomContent">
        {socialIcons.map(({ alt, src, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mainHeader__social"
          >
            <img className="mainHeader__socialIcon" src={src} alt={alt} />
          </a>
        ))}
      </div>

    </header>
  )
}