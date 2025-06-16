import React, { useState } from 'react';
import './App.css';
import { Header, HeroSection, CommunitySection, CTASection, Footer } from './components';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App min-h-screen bg-black text-white">
      <Header />
      <HeroSection inputValue={inputValue} setInputValue={setInputValue} />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;