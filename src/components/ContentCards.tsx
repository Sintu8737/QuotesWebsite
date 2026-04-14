import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Share2, Quote, Star, TrendingUp, Clock, User } from 'lucide-react';

interface CardProps {
  id: number;
  category: string;
  title: string;
  author: string;
  quote: string;
  images: string[];
  stats: {
    likes: number;
    shares: number;
    views: string;
  };
}

const Card: React.FC<CardProps> = ({ category, title, author, quote, images, stats }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image Container with Navigation */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={images[currentImage]}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 text-gray-800" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 text-gray-800" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImage === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Quote Icon */}
        <Quote className="w-8 h-8 text-purple-600 mb-3 opacity-20" />
        
        {/* Quote */}
        <blockquote className="text-gray-700 italic mb-4 line-clamp-3">
          "{quote}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center space-x-2 mb-4">
          <User className="w-4 h-4 text-gray-500" />
          <p className="text-sm text-gray-600 font-medium">{author}</p>
        </div>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Heart className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-current' : ''}`} />
              <span>{stats.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Share2 className="w-4 h-4" />
              <span>{stats.shares}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{stats.views}</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="space-y-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isLiked ? '❤️ Liked' : '🤍 Like Quote'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get This Quote
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ContentCards: React.FC = () => {
  const cardsData: CardProps[] = [
    {
      id: 1,
      category: "Motivation",
      title: "Success Mindset",
      author: "Tony Robbins",
      quote: "The only limit to your impact is your imagination and commitment.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
      ],
      stats: { likes: 1234, shares: 567, views: "12.5k" }
    },
    {
      id: 2,
      category: "Wisdom",
      title: "Life Lessons",
      author: "Eleanor Roosevelt",
      quote: "Yesterday is history, tomorrow is a mystery, today is a gift.",
      images: [
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop"
      ],
      stats: { likes: 892, shares: 234, views: "8.2k" }
    },
    {
      id: 3,
      category: "Success",
      title: "Business Quotes",
      author: "Steve Jobs",
      quote: "Innovation distinguishes between a leader and a follower.",
      images: [
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
      ],
      stats: { likes: 2156, shares: 892, views: "25.7k" }
    },
    {
      id: 4,
      category: "Inspiration",
      title: "Creative Thinking",
      author: "Albert Einstein",
      quote: "Creativity is intelligence having fun.",
      images: [
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop"
      ],
      stats: { likes: 3421, shares: 1203, views: "42.1k" }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-semibold uppercase tracking-wider text-sm">Popular Quotes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Inspiration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of powerful quotes that will motivate and inspire you
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/25"
          >
            Explore More Quotes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentCards;
