import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Utensils, 
  Heart, 
  Search, 
  Star, 
  Clock, 
  Users, 
  Globe,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Coffee,
  Home,
  Waves
} from 'lucide-react';
import './App.css';

// Import images
import portugalLandscape from './assets/portugal-landscape.jpg';
import lisbonArchitecture from './assets/lisbon-architecture.jpg';
import portugueseFood from './assets/portuguese-food.jpg';
import algarveBeach from './assets/algarve-beach.jpg';
import portoCity from './assets/porto-city.jpg';
import AdSense from './components/AdSense';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for places to live
  const placesToLive = [
    {
      id: 1,
      name: 'Lisbon',
      region: 'Central',
      image: lisbonArchitecture,
      description: 'Portugal\'s vibrant capital with historic charm and modern amenities.',
      rating: 4.8,
      cost: '€€€',
      highlights: ['Historic neighborhoods', 'Great public transport', 'Vibrant nightlife']
    },
    {
      id: 2,
      name: 'Porto',
      region: 'North',
      image: portoCity,
      description: 'UNESCO World Heritage city with stunning architecture and port wine.',
      rating: 4.7,
      cost: '€€',
      highlights: ['World Heritage site', 'Affordable living', 'Cultural hub']
    },
    {
      id: 3,
      name: 'Algarve',
      region: 'South',
      image: algarveBeach,
      description: 'Beautiful coastal region perfect for beach lovers and retirees.',
      rating: 4.6,
      cost: '€€€',
      highlights: ['Stunning beaches', 'Year-round sunshine', 'Golf courses']
    }
  ];

  // Sample data for places to eat
  const placesToEat = [
    {
      id: 1,
      name: 'Zé dos Cornos',
      city: 'Lisbon',
      type: 'Traditional Tasca',
      image: portugueseFood,
      description: 'Famous for their grilled ribs and authentic Portuguese atmosphere.',
      rating: 4.9,
      price: '€€',
      specialty: 'Grilled Ribs'
    },
    {
      id: 2,
      name: 'O Pescador',
      city: 'Lagos',
      type: 'Seafood',
      image: portugueseFood,
      description: 'Fresh fish and seafood in a no-frills Portuguese setting.',
      rating: 4.8,
      price: '€€',
      specialty: 'Grilled Seabass'
    },
    {
      id: 3,
      name: 'A Forja',
      city: 'Lagos',
      type: 'Traditional',
      image: portugueseFood,
      description: 'Traditional Portuguese restaurant serving regional specialties.',
      rating: 4.7,
      price: '€€',
      specialty: 'Seafood Rice'
    }
  ];

  // Cultural insights data
  const culturalInsights = [
    {
      title: 'Portuguese Festivals',
      description: 'Every town has annual festivals with music, food, and dancing until dawn.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Coffee Culture',
      description: 'Taking a coffee break mid-morning and after lunch is deeply ingrained.',
      icon: <Coffee className="w-6 h-6" />
    },
    {
      title: 'Fado Music',
      description: 'The soulful Portuguese music that tells stories of life and longing.',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'live', 'eat', 'culture'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Waves className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Portugal Expat Directory</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'live', label: 'Places to Live' },
                { id: 'eat', label: 'Places to Eat' },
                { id: 'culture', label: 'Culture' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-2 space-y-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'live', label: 'Places to Live' },
                  { id: 'eat', label: 'Places to Eat' },
                  { id: 'culture', label: 'Culture' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${portugalLandscape})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Your Guide to
            <span className="block text-yellow-400">Expat Life in Portugal</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Discover the best places to eat, live, and experience the Portuguese way of life
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('live')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Find Places to Live</span>
            </button>
            <button
              onClick={() => scrollToSection('eat')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Utensils className="w-5 h-5" />
              <span>Discover Food</span>
            </button>
          </motion.div>
        </div>

        {/* AdSense Banner Placeholder */}
        <AdSense slot="3877669206" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 text-sm">
            AdSense Banner (728x90)
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Find What You're Looking For</h2>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search places, restaurants, or cultural insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Places to Live Section */}
      <section id="live" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Places to Live</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vibrant cities to peaceful coastal towns, discover where expats thrive in Portugal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placesToLive.map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                    {place.cost}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{place.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{place.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  
                  <div className="space-y-2">
                    {place.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AdSense Rectangle Placeholder */}
          <AdSense slot="3877669206" />
          <div className="flex justify-center mt-16">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
              AdSense Rectangle (300x250)
            </div>
          </div>
        </div>
      </section>

      {/* Places to Eat Section */}
      <section id="eat" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Places to Eat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional tascas to modern restaurants, taste the authentic flavors of Portugal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placesToEat.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
                    {restaurant.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.city}</span>
                    </div>
                    <span className="font-semibold text-green-600">{restaurant.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-sm font-semibold text-blue-800">Specialty: </span>
                    <span className="text-sm text-blue-700">{restaurant.specialty}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portuguese Culture Section */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portuguese Way of Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the culture, customs, and lifestyle that make Portugal special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {culturalInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  {insight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Cultural Tips */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Essential Cultural Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Clock className="w-8 h-8 mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Meal Times</h4>
                  <p className="text-sm">Lunch is typically 12-2pm, dinner starts around 7-8pm</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Users className="w-8 h-8 mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Social Customs</h4>
                  <p className="text-sm">Portuguese are warm and welcoming to foreigners</p>
                </div>
              </div>
            </div>
          </div>

          {/* AdSense Rectangle Placeholder */}
          <AdSense slot="3877669206" />
          <div className="flex justify-center mt-16">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
              AdSense Rectangle (300x250)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Waves className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Portugal Expat Directory</span>
              </div>
              <p className="text-gray-400">
                Your comprehensive guide to expat life in Portugal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('live')} className="hover:text-white transition-colors">Places to Live</button></li>
                <li><button onClick={() => scrollToSection('eat')} className="hover:text-white transition-colors">Places to Eat</button></li>
                <li><button onClick={() => scrollToSection('culture')} className="hover:text-white transition-colors">Culture</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Visa Information</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Language Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">info@portugalexpatdirectory.com</p>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Heart className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Portugal Expat Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

