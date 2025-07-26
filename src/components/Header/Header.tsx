import type React from "react";
import './Header.scss';
import YouTubeIcon from '@/assets/logos/YouTube.svg';
import InstagramIcon from '@/assets/logos/Instagram.svg';
import FacebookIcon from '@/assets/logos/Facebook.svg';
import XIcon from '@/assets/logos/X.svg';
import TikTokIcon from '@/assets/logos/TikTok.svg';
import ViberIcon from '@/assets/logos/Viber.svg';
import DiscordIcon from '@/assets/logos/Discord.svg';

export const Header: React.FC = () => {
  const socialIcons = [
    { alt: 'YouTube', src: YouTubeIcon, href: 'https://youtube.com' },
    { alt: 'Instagram', src: InstagramIcon, href: 'https://instagram.com' },
    { alt: 'Facebook', src: FacebookIcon, href: 'https://facebook.com' },
    { alt: 'X', src: XIcon, href: 'https://x.com' },
    { alt: 'TikTok', src: TikTokIcon, href: 'https://tiktok.com' },
    { alt: 'Viber', src: ViberIcon, href: 'https://viber.com' },
    { alt: 'Discord', src: DiscordIcon, href: 'https://discord.com' }
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
  );
};
