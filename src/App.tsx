import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NavigationMenu from './components/NavigationMenu';
import ContentCards from './components/ContentCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <NavigationMenu />
        <ContentCards />
        <Footer />
      </main>
    </div>
  );
}

export default App;
