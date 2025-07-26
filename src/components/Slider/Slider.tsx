import React, { useState, useRef, useEffect } from 'react';
import './Slider.scss';

const cards = [
  {
    id: 1,
    title: 'Agent-Agent and Human-Agent Collaboration',
    text: 'Foster dynamic interactions to tackle complex challenges collectively.',
    image: '/images/slider/slider1.svg',
  },
  {
    id: 2,
    title: 'Simulations and Economic Modeling',
    text: 'Simulate and refine systems in a risk-free environment.',
    image: '/images/slider/slider2.svg',
  },
  {
    id: 3,
    title: 'Proof of Agent Autonomy',
    text: 'Validate agent parameters and memory immutability',
    image: '/images/slider/slider3.svg',
  },
];

// ...всі імпорти залишаються
export const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const pointerDownX = useRef(0);
  const pointerUpX = useRef(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    let timeout: ReturnType<typeof setTimeout>;
    if (swipeDirection) {
      timeout = setTimeout(() => setSwipeDirection(null), 500);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeout) clearTimeout(timeout);
    };
  }, [swipeDirection]);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleStart = (clientX: number) => {
    pointerDownX.current = clientX;
  };

  const handleMove = (clientX: number) => {
    pointerUpX.current = clientX;
  };

  const handleEnd = () => {
    const diff = pointerDownX.current - pointerUpX.current;

    if (diff > 50) {
      setSwipeDirection('left');
      next();
    } else if (diff < -50) {
      setSwipeDirection('right');
      prev();
    }
  };

  const getStyle = (index: number): React.CSSProperties => {
    const total = cards.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) {
      diff = diff - total;
    }

    if (isMobile) {
      const gap = 15;
      const prevIndex = (activeIndex - 1 + total) % total;
      const nextIndex = (activeIndex + 1) % total;

      let zIndex = 1;
      let opacity = 0;

      if (index === activeIndex) {
        zIndex = 3;
        opacity = 1;
      } else if (index === prevIndex) {
        zIndex = swipeDirection === 'right' ? 1 : 2;
        opacity = 1;
      } else if (index === nextIndex) {
        zIndex = swipeDirection === 'right' ? 2 : 1;
        opacity = 1;
      }

      const altDiff = diff > total / 2 ? diff - total : diff;

      return {
        transform: `translateX(calc(${altDiff * 100}% + ${altDiff * gap}px))`,
        transition: 'transform 0.7s ease',
        opacity,
        zIndex,
      };
    }

    if (diff === 0) {
      return {
        zIndex: 100,
        opacity: 1,
        transform: 'translate(0, 0) scale(1)',
        transition: 'transform 0.7s ease, opacity 0.7s ease',
        pointerEvents: 'auto',
      };
    }

    const absDiff = diff > 0 ? diff : total + diff;
    const translateY = -absDiff * 60;
    const scale = 1 - absDiff * 0.1;
    const zIndex = 100 - absDiff;

    return {
      zIndex,
      transform: `translate(0px, ${translateY}px) scale(${scale})`,
      transition: 'transform 0.7s ease, opacity 0.7s ease',
      pointerEvents: 'none',
    };
  };

  return (
    <div className="slider-stack">
      {!isMobile && (
        <button className="arrow left" onClick={prev}>
          <img
            className="arrow__image"
            src="./images/icons/arrow.svg"
            alt="arrowLeft"
          />
        </button>
      )}

      <div
        className="cards-wrapper"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        // 👇 Десктоп свайп працює тільки на мобільних
        onMouseDown={(e) => isMobile && handleStart(e.clientX)}
        onMouseMove={(e) => isMobile && handleMove(e.clientX)}
        onMouseUp={() => isMobile && handleEnd()}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${isMobile ? '__mobile' : ''}`}
            style={getStyle(index)}
          >
            <div className="card__content">
              <div className="card__info">
                <p className="card__number">{`0${card.id}`}</p>
                <div className="card__contentText">
                  <h3 className="card__title">{card.title}</h3>
                  <p className="card__text">{card.text}</p>
                </div>
              </div>
              <img
                className="card__image"
                src={card.image}
                alt={card.title}
              />
            </div>
          </div>
        ))}
      </div>

      {!isMobile && (
        <button className="arrow right" onClick={next}>
          <img
            className="arrow__image arrow__image--right"
            src="./images/icons/arrow.svg"
            alt="arrowRight"
          />
        </button>
      )}
    </div>
  );
};

