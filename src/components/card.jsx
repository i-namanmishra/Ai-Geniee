import React, { useState } from 'react';
import { 
  FaCompass, 
  FaLightbulb, 
  FaUsers, 
  FaCode, 
  FaBrain, 
  FaBook,
  FaChevronLeft,
  FaChevronRight 
} from 'react-icons/fa';

export const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Suggest beautiful places for an upcoming trip",
      Icon: FaCompass,
      className: "card-blue"
    },
    {
      title: "Briefly summarize this concept: urban planning",
      Icon: FaLightbulb,
      className: "card-gray"
    },
    {
      title: "Brainstorm team bonding activities for work retreat",
      Icon: FaUsers,
      className: "card-green"
    },
    {
      title: "Improve the readability of the following code",
      Icon: FaCode,
      className: "card-purple"
    },
    {
      title: "Explain the fundamentals of machine learning",
      Icon: FaBrain,
      className: "card-pink"
    },
    {
      title: "Recommend books for improving leadership skills",
      Icon: FaBook,
      className: "card-yellow"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= cards.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? cards.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button 
          className="nav-button"
          onClick={prevSlide}
          aria-label="Previous cards"
        >
          <FaChevronLeft />
        </button>
        
        <div className="cards-container">
          {[0, 1].map((offset) => {
            const cardIndex = (currentIndex + offset) % cards.length;
            const card = cards[cardIndex];
            const Icon = card.Icon;
            
            return (
              <div
                key={cardIndex}
                className={`card ${card.className}`}
              >
                <h3 className="card-title">
                  {card.title}
                </h3>
                <div className="card-icon">
                  <Icon />
                </div>
              </div>
            );
          })}
        </div>
        
        <button 
          className="nav-button"
          onClick={nextSlide}
          aria-label="Next cards"
        >
          <FaChevronRight />
        </button>
      </div>
      
      <div className="dot-indicators">
        {Array.from({ length: cards.length / 2 }, (_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex / 2 ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
