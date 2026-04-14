import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Inspiring Quotes",
      subtitle: "Discover wisdom that transforms your mindset",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Daily Motivation",
      subtitle: "Fuel your journey with powerful words",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      gradient: "from-pink-600 to-orange-600"
    },
    {
      id: 3,
      title: "Success Stories",
      subtitle: "Learn from those who've achieved greatness",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Carousel */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Background Image with Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-90`}></div>
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Content Overlay */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-8">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-6"
                  >
                    <Quote className="w-16 h-16 mx-auto mb-4 text-white/80" />
                  </motion.div>
                  
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all duration-300 border border-white/30 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all duration-300 border border-white/30 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/80 text-sm uppercase tracking-wider">Get Started Today</span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border border-white/20 backdrop-blur-sm"
          >
            Get Your Free Quote
          </motion.button>
          
          <div className="mt-8 flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white/80 text-sm">Trusted by 10,000+ users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
