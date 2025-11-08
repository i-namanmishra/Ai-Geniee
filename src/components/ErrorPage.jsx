import React, { useEffect, useState } from 'react';
import './ErrorPage.css';

export const ErrorPage = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, index) => ({
        id: index,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3}px`,
          height: `${Math.random() * 3}px`,
          '--duration': `${1 + Math.random()}s`,
          '--delay': `${Math.random()}s`
        }
      }));
      setStars(newStars);
    };

    // Create shooting stars
    const generateShootingStars = () => {
      const newShootingStars = Array.from({ length: 3 }, (_, index) => ({
        id: index,
        style: {
          top: `${Math.random() * 50}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`
        }
      }));
      setShootingStars(newShootingStars);
    };

    generateStars();
    generateShootingStars();

    // Regenerate shooting stars periodically
    const interval = setInterval(generateShootingStars, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="error-page">
      {/* Background stars */}
      <div className="stars">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={star.style}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {shootingStars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={star.style}
        />
      ))}

      {/* Planets */}
      <div className="planet planet-1" />
      <div className="planet planet-2" />

      {/* Error content */}
      <div className="error-content">
        <h1 className="error-number">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          The page you are looking for might have been Wrong, 
          had its name changed, or is temporarily unavailable.
        </p>
        <a href="/" className="error-button">
          Return Home
        </a>
      </div>
    </div>
  );
};