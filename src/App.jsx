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
  Waves,
  BookOpen,
  Landmark,
  Handshake,
  Briefcase,
  Church,
  Megaphone,
  Speech,
  FileText,
  ShoppingBag,
  Car,
  Lightbulb,
  Phone
} from 'lucide-react';
import './App.css';
import portugalLandscape from './assets/portugal-landscape.jpg';
import lisbonArchitecture from './assets/lisbon-architecture.jpg';
import portugueseFood from './assets/portuguese-food.jpg';
import algarveBeach from './assets/algarve-beach.jpg';
import portoCity from './assets/porto-city.jpg';
import zedoscornosImage from './assets/zedoscornos.jpg';
import opescadorImage from './assets/opescador.jpg';
import aforjaImage from './assets/aforja.jpg';
import AdSense from './components/AdSense';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

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

  // --- Update the allPlacesToEat array with improved data structure and preserve specific images for three restaurants ---
  const allPlacesToEat = [
    {
      id: 1,
      name: 'Zé dos Cornos',
      city: 'Lisbon',
      region: 'Central',
      type: 'Traditional Tasca',
      image: zedoscornosImage, // preserve specific image
      description: 'Famous for their grilled ribs and authentic Portuguese atmosphere. A must-visit for a true local experience.',
      rating: 4.9,
      price: '€€',
      specialty: 'Grilled Ribs',
      address: 'Rua da Madalena 88, 1100-323 Lisboa',
      contact: '+351 21 887 0900',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g189158-d1089907-Reviews-Ze_dos_Cornos-Lisbon_Lisbon_District_Central_Portugal.html'
    },
    {
      id: 2,
      name: 'O Pescador',
      city: 'Lagos',
      region: 'South',
      type: 'Seafood',
      image: opescadorImage, // preserve specific image
      description: 'Fresh fish and seafood in a no-frills Portuguese setting. Enjoy the catch of the day in a relaxed ambiance.',
      rating: 4.8,
      price: '€€',
      specialty: 'Grilled Seabass',
      address: 'Rua António Crisógono dos Santos 16, 8600-580 Lagos',
      contact: '+351 282 761 178',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g189117-d1088769-Reviews-O_Pescador-Lagos_Faro_District_Algarve.html'
    },
    {
      id: 3,
      name: 'A Forja',
      city: 'Lagos',
      region: 'South',
      type: 'Traditional',
      image: aforjaImage, // preserve specific image
      description: 'Traditional Portuguese restaurant serving regional specialties. Known for its authentic flavors and cozy atmosphere.',
      rating: 4.7,
      price: '€€',
      specialty: 'Seafood Rice',
      address: 'Rua da Barroca 20, 8600-679 Lagos',
      contact: '+351 282 767 350',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g189117-d1088768-Reviews-A_Forja-Lagos_Faro_District_Algarve.html'
    },
    {
      id: 4,
      name: 'Cantinho do Avillez',
      city: 'Porto',
      region: 'North',
      type: 'Modern Portuguese',
      image: portugueseFood,
      description: 'Contemporary Portuguese cuisine by a renowned chef. A modern take on traditional dishes in a chic setting.',
      rating: 4.7,
      price: '€€€',
      specialty: 'Explosive Olives',
      address: 'Rua de Mouzinho da Silveira 166, 4000-069 Porto',
      contact: '+351 22 322 7920',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g189180-d2091990-Reviews-Cantinho_do_Avillez_Porto-Porto_Porto_District_Northern_Portugal.html'
    },
    {
      id: 5,
      name: 'Restaurante Abade de Priscos',
      city: 'Braga',
      region: 'North',
      type: 'Traditional',
      image: portugueseFood,
      description: 'Classic Northern Portuguese dishes in a cozy setting. A culinary journey through the region\'s rich gastronomic heritage.',
      rating: 4.6,
      price: '€€',
      specialty: 'Bacalhau à Narcisa',
      address: 'Rua Abade de Priscos 7, 4700-307 Braga',
      contact: '+351 253 276 650',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g189174-d1088767-Reviews-Restaurante_Abade_de_Priscos-Braga_Braga_District_Northern_Portugal.html'
    },
    {
      id: 6,
      name: 'Time Out Market Lisboa',
      city: 'Lisbon',
      region: 'Central',
      type: 'Food Hall',
      image: portugueseFood,
      description: 'A vibrant food hall with a wide variety of Portuguese and international cuisines. Perfect for sampling different dishes.',
      rating: 4.5,
      price: '€€',
      specialty: 'Diverse culinary options',
      address: 'Av. 24 de Julho 49, 1200-479 Lisboa',
      contact: '+351 21 395 1274',
      tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g189158-d6964062-Reviews-Time_Out_Market_Lisboa-Lisbon_Lisbon_District_Central_Portugal.html'
    },
    {
      id: 7,
      name: 'Tascantiga',
      city: 'Porto',
      region: 'North',
      type: 'Tapas',
      image: portugueseFood,
      description: 'Cozy tapas bar with a great selection of Portuguese petiscos and wines. Ideal for a casual meal with friends.',
      rating: 4.6,
      price: '€€',
      specialty: 'Petiscos (Portuguese tapas)',
      address: 'Rua da Entreparedes 18, 4000-197 Porto',
      contact: '+351 22 208 4000',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g189180-d7350646-Reviews-Tascantiga-Porto_Porto_District_Northern_Portugal.html'
    }
  ];

  const filteredPlacesToEat = allPlacesToEat.filter(place => {
    const matchesRegion = selectedRegion === 'All' || place.region === selectedRegion;
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const regions = ['All', ...new Set(allPlacesToEat.map(place => place.region))];

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

  const additionalCulturalInsights = [
    {
      title: 'Cultural Insights',
      description: 'Understanding Portuguese values, traditions, and social norms.',
      icon: <Landmark className="w-6 h-6" />,
      subsections: [
        { title: 'Family importance', description: '' },
        { title: 'Hospitality culture', description: '' },
        { title: 'Work-life balance', description: '' },
        { title: 'Religious traditions', description: '' }
      ],
      link: '#'
    },
    {
      title: 'Festivals & Events',
      description: 'Experience Portugal\'s vibrant festival calendar throughout the year.',
      icon: <Megaphone className="w-6 h-6" />,
      subsections: [
        { title: 'Santos Populares', description: '' },
        { title: 'Festa da Flor', description: '' },
        { title: 'Festival de Fado', description: '' },
        { title: 'Local celebrations', description: '' }
      ],
      link: '#'
    },
    {
      title: 'Language Tips',
      description: 'Essential Portuguese phrases and language learning resources.',
      icon: <Speech className="w-6 h-6" />,
      subsections: [
        { title: 'Basic phrases', description: '' },
        { title: 'Pronunciation guide', description: '' },
        { title: 'Language schools', description: '' },
        { title: 'Practice opportunities', description: '' }
      ],
      link: '#'
    },
    {
      title: 'Bureaucracy Guide',
      description: 'Portuguese administrative processes with confidence.',
      icon: <FileText className="w-6 h-6" />,
      subsections: [
        { title: 'NIF registration', description: '' },
        { title: 'SEF appointments', description: '' },
        { title: 'Healthcare system', description: '' },
        { title: 'Banking setup', description: '' }
      ],
      link: '#'
    },
    {
      title: 'Social Customs',
      description: 'Learn the unwritten rules of Portuguese social interactions.',
      icon: <Handshake className="w-6 h-6" />,
      subsections: [
        { title: 'Greeting etiquette', description: '' },
        { title: 'Dining customs', description: '' },
        { title: 'Business culture', description: '' },
        { title: 'Friendship building', description: '' }
      ],
      link: '#'
    },
    {
      title: 'Practical Living',
      description: 'Day-to-day tips for living comfortably in Portugal.',
      icon: <ShoppingBag className="w-6 h-6" />,
      subsections: [
        { title: 'Shopping habits', description: '' },
        { title: 'Transportation', description: '' },
        { title: 'Utilities setup', description: '' },
        { title: 'Emergency contacts', description: '' }
      ],
      link: '#'
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
            <div className="mt-8 flex justify-center space-x-4">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors ${
                    selectedRegion === region
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlacesToEat.map((restaurant, index) => (
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
                  <div className="bg-blue-50 rounded-lg p-3 mb-3">
                    <span className="text-sm font-semibold text-blue-800">Specialty: </span>
                    <span className="text-sm text-blue-700">{restaurant.specialty}</span>
                  </div>
                  {/* New details: address, contact, TripAdvisor */}
                  <div className="space-y-1 text-sm text-gray-600">
                    {restaurant.address && (
                      <div>
                        <span className="font-semibold">Address:</span>{' '}
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {restaurant.address}
                        </a>
                      </div>
                    )}
                    {restaurant.contact && (
                      <div><span className="font-semibold">Contact:</span> {restaurant.contact}</div>
                    )}
                    {restaurant.tripadvisor && (
                      <div>
                        <a href={restaurant.tripadvisor} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center space-x-1">
                          <span>TripAdvisor</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
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
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white mb-16">
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
          {/* Additional Cultural Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalCulturalInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full">
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{insight.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  {insight.subsections.map((sub, idx) => (
                    <li key={idx}>{sub.title}</li>
                  ))}
                </ul>
                <a href={insight.link} className="text-blue-600 hover:underline flex items-center space-x-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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

