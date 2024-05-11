import React from 'react';

export default function Hero() {
    return (
      <div className="hero">
        <div className="text-center title">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Lee Hyunil</h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-teal-600 mb-6">Full Stack Developer</h2>
          <p className="icon-container">
            <i className="fa-solid fa-laptop-code"></i>
          </p>
        </div>
        
        <div className="photo">
          <img src="src/Picture/Face.jpg" alt="My Face" />
        </div>
      </div>
    );
  }