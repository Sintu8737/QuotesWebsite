import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Menu, X, Quote, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                QuoteHub
              </h1>
              <p className="text-xs text-gray-600">Inspire Daily</p>
            </div>
          </motion.div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <motion.div 
              animate={{ 
                boxShadow: searchFocus 
                  ? "0 0 0 3px rgba(147, 51, 234, 0.2)" 
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search quotes, authors, topics..."
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                className="w-full px-5 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-gray-500"
              />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.button 
              whileHover={{ y: -2 }}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center space-x-2"
              type="button"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore</span>
            </motion.button>
            <motion.button 
              whileHover={{ y: -2 }}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              type="button"
            >
              Categories
            </motion.button>
            <motion.button 
              whileHover={{ y: -2 }}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              type="button"
            >
              Contact
            </motion.button>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
              <Globe className="w-4 h-4 text-purple-600" />
              <div className="flex items-center space-x-2">
                <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">EN</button>
                <span className="text-gray-400">|</span>
                <button className="text-gray-700 hover:text-purple-600 transition-colors">FR</button>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search quotes..."
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-600" />
              </div>
              
              <button type="button" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Explore</button>
              <button type="button" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Categories</button>
              <button type="button" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</button>
              
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Globe className="w-4 h-4 text-purple-600" />
                <div className="flex items-center space-x-2">
                  <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">EN</button>
                  <span className="text-gray-400">|</span>
                  <button className="text-gray-700 hover:text-purple-600 transition-colors">FR</button>
                </div>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
