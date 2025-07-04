import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaEye, FaEyeSlash, FaWhatsapp, FaBirthdayCake, FaHeart } from 'react-icons/fa';
import { RiSparklingFill } from 'react-icons/ri';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Book from './pages/Book';
import Contact from './pages/Contact';
import CourseUpload from './pages/admin/CourseUpload';
import CoursePlayer from './pages/CoursePlayer';
import ThankYou from './pages/ThankYou';
import './App.css';
import Courses from './pages/Courses';
import Partnership from './pages/Partnership';
import AffiliateProgram from './pages/AffiliateProgram';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sparkles, setSparkles] = useState([]);
  const [showBirthdayMessage, setShowBirthdayMessage] = useState(true);
  const navigate = useNavigate();

  // Create magical sparkles
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    
    const sparkleInterval = setInterval(() => {
      setSparkles(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 5,
          duration: Math.random() * 3 + 2
        }
      ]);
      
      // Remove old sparkles
      if (sparkles.length > 20) {
        setSparkles(prev => prev.slice(1));
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      clearInterval(sparkleInterval);
    };
  }, [sparkles.length]);

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) && password.length >= 6) {
      // Magical login transition
      setIsLoggedIn(true);
      navigate('/');
    } else {
      // Playful error animation
      const form = document.querySelector('.glass-form');
      form.classList.add('animate-shake');
      setTimeout(() => form.classList.remove('animate-shake'), 500);
    }
  };

  const handleCloseBirthdayMessage = () => {
    setShowBirthdayMessage(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-900 to-pink-800 text-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="mx-auto mb-6"
          >
            <img 
              src="/logo.png" 
              alt="Lily's Luxe Logo"
              className="w-24 h-24 object-contain animate-pulse"
            />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            Lily's Luxe
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-pink-200"
          >
            A Glossy Polished Perfection...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Birthday surprise modal
  if (showBirthdayMessage && !isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden"
        >
          {/* Confetti effect */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, x: Math.random() * 200 - 100, opacity: 0 }}
              animate={{ 
                y: [0, 500],
                x: [0, Math.random() * 200 - 100],
                opacity: [1, 0],
                rotate: [0, Math.random() * 360]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                top: -50,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                color: ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 5)]
              }}
              className="pointer-events-none"
            >
              {['🎉', '🎊', '🎈', '🎁', '✨', '💝', '🥳'][Math.floor(Math.random() * 7)]}
            </motion.div>
          ))}

          <div className="relative z-10">
            <FaBirthdayCake className="text-6xl text-yellow-300 mx-auto mb-4 animate-bounce" />
            <h2 className="text-4xl font-bold text-white mb-4">Happy Birthday Lilian!</h2>
            <p className="text-xl text-white/90 mb-6">
              Wishing You a Day as Beautiful and Radiant as You Are! ✨
            </p>
            <div className="bg-white/20 rounded-xl p-4 mb-6">
              <p className="text-white italic">
              
               "May God bless you abundantly on this special day.
                May your heart always know peace, your hands create beauty,
                and your life overflow with joy, grace, and divine favor.

               You are a light to many — Gentle, Strong, and Radiant.
               I pray this new year brings you closer to your dreams,
               deeper in love, and stronger in purpose.

              Keep shining, beautiful soul.
              You are deeply loved. 💖🌸✨!"


              </p>
              <div className="flex justify-center mt-2">
                <FaHeart className="text-pink-300 animate-pulse" />
              </div>
            </div>
            <motion.button
              onClick={handleCloseBirthdayMessage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 mx-auto"
            >
              Enter Your Luxe World
              <RiSparklingFill className="animate-pulse" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
          darkMode ? 'dark' : ''
        }`}
        style={{
          backgroundImage: "url('/images/lily.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Solid dark pink overlay */}
        <div className="absolute inset-0 bg-pink-900/80"></div>
        
        {/* Login form with solid dark pink styling */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="glass-form bg-pink-900/90 p-10 rounded-3xl shadow-2xl w-[350px] sm:w-[400px] backdrop-blur-lg border border-pink-700 hover:border-pink-500 transition-all duration-300">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center mb-6"
            >
              <h1 className="text-4xl font-bold text-center text-white mb-4 flex items-center justify-center gap-2">
                <RiSparklingFill className="text-yellow-300 animate-pulse" />
                Lily's Luxe
                <RiSparklingFill className="text-yellow-300 animate-pulse" />
              </h1>
              <p className="text-center text-white/80 mb-6">
                Where beauty meets perfection ✨
              </p>
            </motion.div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-medium mb-1 flex items-center">
                <RiSparklingFill className="mr-2 text-yellow-200 text-xs" />
                Email
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300/50 mb-4 bg-pink-800/50 text-white placeholder:text-white/50 transition-all"
                />
              </motion.div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm font-medium mb-1 flex items-center">
                <RiSparklingFill className="mr-2 text-yellow-200 text-xs" />
                Password
              </label>
              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300/50 bg-pink-800/50 text-white placeholder:text-white/50 transition-all"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-white/70 hover:text-white transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </motion.div>
            </div>

            <motion.button
              onClick={handleLogin}
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-pink-700 text-white font-bold py-3 rounded-lg hover:bg-pink-600 transition-all border border-pink-600 flex items-center justify-center gap-2"
            >
              <RiSparklingFill className="animate-pulse" />
              Enter the Luxe World
            </motion.button>

            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.05 }}
              className="mt-4 text-sm text-white/70 hover:text-yellow-300 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              {darkMode ? (
                <>
                  <FaSun className="text-yellow-300" />
                  Light Mode
                </>
              ) : (
                <>
                  <FaMoon />
                  Dark Mode
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Rest of your component remains the same...
  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-rose-50 to-pink-50 text-pink-900'}`}>
      {/* Animated header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`backdrop-blur-md ${darkMode ? 'bg-black/80' : 'bg-white/80'} shadow-lg fixed top-0 left-0 right-0 p-4 flex justify-between items-center border-b ${darkMode ? 'border-pink-900' : 'border-pink-200'} z-50`}
      >
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Lily's Luxe Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Lily's Nail Luxe
          </h1>
        </motion.div>
        
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Services', 'Gallery', 'Book', 'Contact', 'Courses', 'Partnership', 'Affiliate',].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`font-medium hover:text-pink-500 transition-colors ${darkMode ? 'hover:text-yellow-300' : 'hover:text-pink-600'}`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full ${darkMode ? 'bg-pink-900/30 hover:bg-pink-900/50' : 'bg-pink-100 hover:bg-pink-200'} transition-colors`}
        >
          {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-pink-600" />}
        </motion.button>
      </motion.header>

      {/* Main content with subtle entrance animation */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 px-4 sm:px-6 pb-20"
      >
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/services" element={<Services darkMode={darkMode} />} />
            <Route path="/gallery" element={<Gallery darkMode={darkMode} />} />
            <Route path="/book" element={<Book darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="/upload-course" element={<CourseUpload darkMode={darkMode} />} />
            <Route path="/course/:id" element={<CoursePlayer darkMode={darkMode} />} />
            <Route path="/thank-you" element={<ThankYou darkMode={darkMode} />} />
            <Route path="/courses" element={<Courses darkMode={darkMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/affiliate" element={<AffiliateProgram />} />
          </Routes>
        </AnimatePresence>
      </motion.main>

      {/* Footer */}
      <motion.footer 
        className={`text-center py-8 border-t ${darkMode ? 'border-pink-900 bg-black/70' : 'border-pink-200 bg-white/70'} shadow-inner`}
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lily's Nail Luxe. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-70">
          Crafted with 💖 and magic
        </p>
      </motion.footer>

      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.link/fdt40r"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center text-2xl"
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
}