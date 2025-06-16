import React, { useState } from 'react';

// Header Component
export const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black">
      <div className="flex items-center">
        <span className="text-white font-medium">🏠 Home</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300 transition-colors">
          Log in
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
          Sign up
        </button>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = ({ inputValue, setInputValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Building:', inputValue);
  };

  return (
    <section className="px-8 py-16 max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <h1 className="text-4xl font-light mb-2">
          Welcome,
        </h1>
        <h2 className="text-4xl font-semibold">
          What will you build today?
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="mb-16">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Build me a dashboard to..."
            className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg border border-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-lg"
          />
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Connect GitHub
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                AI
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Clone Mobile
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                HACK Tracker
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                AI Jam
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Surge.sh lite
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-800 rounded">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-800 rounded">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

// Community Section Component
export const CommunitySection = () => {
  const categories = [
    { name: 'AI Apps', active: true },
    { name: 'Digital SideKick', active: false },
    { name: 'Landing', active: false },
    { name: 'Hack & Play', active: false }
  ];

  const projects = [
    {
      title: 'AI Goal Coach',
      description: 'AI coach that analyzes your goals and helps you achieve them through personalized guidance.',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4',
      category: 'AI Apps'
    },
    {
      title: 'Solo Pro',
      description: 'Solopreneur Knowledge Management System built for productivity and growth.',
      image: 'https://images.unsplash.com/photo-1641567535859-c58187ac4954',
      category: 'Digital SideKick'
    },
    {
      title: 'Children Storyboard',
      description: 'Interactive app that lets children create and share their own story adventures.',
      image: 'https://images.unsplash.com/photo-1716436330152-a58390897652',
      category: 'Hack & Play'
    },
    {
      title: 'Research Explorer',
      description: 'An intelligent research tool that helps you explore and organize information effectively.',
      image: 'https://images.unsplash.com/photo-1507764923504-cd90bf7da772',
      category: 'Landing'
    }
  ];

  return (
    <section className="px-8 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-light mb-8">From the Community</h3>
        
        <div className="flex justify-center space-x-8 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                category.active
                  ? 'bg-white text-black border-white'
                  : 'text-white border-gray-600 hover:border-gray-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300 cursor-pointer group"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="text-gray-400 hover:text-white transition-colors flex items-center mx-auto">
          Visit Our Showcase
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// CTA Section Component
export const CTASection = () => {
  return (
    <section className="px-8 py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-4">
          Start building with
        </h2>
        <div className="mb-12">
          <span 
            className="text-5xl md:text-6xl font-mono font-bold"
            style={{
              background: 'linear-gradient(90deg, #00ff41, #00cc33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(0, 255, 65, 0.3)'
            }}
          >
            EMERGENT TODAY
          </span>
        </div>
        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="px-8 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-400">
        <div>
          <span className="text-white font-medium">emergent</span>
          <span className="ml-2">2025</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span>Copyright © emergentlabs 2025</span>
        </div>
      </div>
    </footer>
  );
};