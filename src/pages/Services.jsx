import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShare2, FiBookmark, FiPlay, FiMessageSquare, FiClock, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Booking Context
const BookingContext = createContext();

export function ServicesWithProvider() {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('beautyBookings');
    return saved ? JSON.parse(saved) : [];
  });

  const [userBookingCount, setUserBookingCount] = useState(() => {
    const count = localStorage.getItem('userBookingCount');
    return count ? parseInt(count) : 0;
  });

  useEffect(() => {
    localStorage.setItem('beautyBookings', JSON.stringify(bookings));
    localStorage.setItem('userBookingCount', userBookingCount);
  }, [bookings, userBookingCount]);

  const addBooking = (service) => {
    const newBooking = {
      id: Date.now(),
      serviceId: service.id,
      serviceName: service.title,
      date: new Date().toISOString(),
      status: 'pending',
      price: service.price,
      details: service.details,
      image: service.image,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      bookingDate: '',
      specialRequests: ''
    };
    
    setBookings([...bookings, newBooking]);
    setUserBookingCount(userBookingCount + 1);
    return newBooking;
  };

  const updateBookingStatus = (bookingId, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    ));
  };

  const cancelBooking = (bookingId) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId));
    setUserBookingCount(Math.max(0, userBookingCount - 1));
  };

  const updateBookingDetails = (bookingId, updatedDetails) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? { ...booking, ...updatedDetails } : booking
    ));
  };

  return (
    <BookingContext.Provider value={{ 
      bookings, 
      userBookingCount, 
      addBooking, 
      updateBookingStatus,
      cancelBooking,
      updateBookingDetails
    }}>
      <Services />
    </BookingContext.Provider>
  );
}

function Services() {
  const navigate = useNavigate();
  const { bookings, userBookingCount, addBooking, cancelBooking } = useContext(BookingContext);
  const [services] = useState([
    {
      id: 1,
      title: "Lash Extensions",
      description: "Classic, Hybrid, and Volume lashes for that luxury look.",
      price: "$30+",
      image: "https://source.unsplash.com/400x300/?eyelash",
      duration: "60-90 mins",
      popularity: 4.9,
      details: "Our lash extensions are made from premium synthetic fibers that mimic natural lashes. Customizable lengths and curls available."
    },
    {
      id: 2,
      title: "Gel & Acrylic Nails",
      description: "Custom nail art, gel polish, refills & glam manicures.",
      price: "$25+",
      image: "https://source.unsplash.com/400x300/?nail-art",
      duration: "45-75 mins",
      popularity: 4.7,
      details: "We use only hypoallergenic products with UV/LED curing. Includes cuticle care and hand massage."
    },
    {
      id: 3,
      title: "Facials & Glow Treatment",
      description: "Deep cleansing, exfoliation and glow-boosting facials.",
      price: "$40+",
      image: "https://source.unsplash.com/400x300/?facial",
      duration: "60 mins",
      popularity: 4.8,
      details: "Includes double cleansing, enzyme exfoliation, extractions (if needed), customized mask, and hydration."
    },
    {
      id: 4,
      title: "Eyebrow Tinting",
      description: "Perfectly shaped and tinted brows that frame your face.",
      price: "$20",
      image: "https://source.unsplash.com/400x300/?eyebrow",
      duration: "30 mins",
      popularity: 4.5,
      details: "Vegetable-based tint that lasts 4-6 weeks. Includes brow shaping with threading or waxing."
    },
  ]);

  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('services');
  const [isFavorite, setIsFavorite] = useState({});
  const [testimonials] = useState([
    {
      id: 1,
      name: "Sarah K.",
      service: "Lash Extensions",
      comment: "Best lash application I've ever had! Lasted a full 4 weeks with proper care.",
      rating: 5
    },
    {
      id: 2,
      name: "Ama P.",
      service: "Gel Nails",
      comment: "My nails stayed perfect for 3 weeks without a single chip. Worth every penny!",
      rating: 5
    },
    {
      id: 3,
      name: "Jessica L.",
      service: "Facial Treatment",
      comment: "My skin has never looked better. The glow lasted for days!",
      rating: 4
    }
  ]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleFavorite = (id) => {
    setIsFavorite(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBookNow = (service) => {
    const newBooking = addBooking(service);
    navigate('/book', { state: { booking: newBooking } });
  };

  const handleCancelBooking = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      cancelBooking(bookingId);
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <FiClock className="text-yellow-500" />;
      case 'confirmed': return <FiCheckCircle className="text-green-500" />;
      case 'cancelled': return <FiXCircle className="text-red-500" />;
      default: return <FiCheckCircle className="text-blue-500" />;
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ));
  };

  return (
    <div className="space-y-16 px-4 md:px-8">
      {/* Booking History Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 p-4 rounded-lg flex justify-between items-center"
      >
        <div>
          <h3 className="font-bold text-gold">Your Booking History</h3>
          <p className="text-sm text-pink-700 dark:text-white">
            You've made {userBookingCount} {userBookingCount === 1 ? 'booking' : 'bookings'} with us
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/bookings')}
          className="bg-gold text-white px-4 py-2 rounded-full text-sm hover:bg-yellow-600 transition"
        >
          View All Bookings
        </motion.button>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('services')}
            className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'services' ? 'border-gold text-gold' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Beauty Services
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'courses' ? 'border-gold text-gold' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Online Courses
          </button>
          <button
            onClick={() => setActiveTab('training')}
            className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'training' ? 'border-gold text-gold' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Live Training
          </button>
        </nav>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'services' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gold text-center mb-8">Our Beauty Services</h2>
            <p className="text-center text-pink-700 dark:text-white mb-10 max-w-2xl mx-auto">
              Indulge in our premium beauty treatments tailored to enhance your natural beauty. Click on any service to learn more.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => {
                const serviceBookings = bookings.filter(b => b.serviceId === s.id);
                const lastBooking = serviceBookings[serviceBookings.length - 1];
                
                return (
                  <motion.div 
                    key={s.id}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 dark:bg-white/10 p-4 rounded-xl shadow-lg cursor-pointer relative"
                    onClick={() => setSelectedService(s)}
                  >
                    <div className="absolute top-3 right-3 z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(s.id);
                        }}
                        className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow"
                      >
                        <FiHeart className={isFavorite[s.id] ? "text-red-500 fill-red-500" : "text-gray-400"} />
                      </button>
                    </div>
                    <div className="relative overflow-hidden rounded-lg mb-3 w-full h-40">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <span className="text-white text-sm font-medium">{s.duration}</span>
                        <div className="flex items-center mt-1">
                          {renderStars(s.popularity)}
                          <span className="text-white text-xs ml-1">({s.popularity})</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-900 dark:text-white">{s.title}</h3>
                    <p className="text-sm text-pink-700 dark:text-white line-clamp-2">{s.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-gold font-bold">{s.price}</p>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookNow(s);
                        }}
                        className="text-xs px-3 py-1 rounded-full bg-gold text-white hover:bg-yellow-600 transition"
                      >
                        Book Now
                      </motion.button>
                    </div>
                    
                    {/* Booking status badge */}
                    {lastBooking && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-2 left-2 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded-full text-xs flex items-center"
                      >
                        {getStatusIcon(lastBooking.status)}
                        <span className="ml-1 capitalize">{lastBooking.status}</span>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Recent Bookings Preview */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-12 bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gold mb-4">Recent Bookings</h3>
              {bookings.slice(0, 3).map(booking => (
                <motion.div 
                  key={booking.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-b border-gray-100 dark:border-gray-700 py-3 last:border-0"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={booking.image} alt={booking.serviceName} className="w-12 h-12 rounded-md object-cover mr-3" />
                      <div>
                        <h4 className="font-medium text-pink-900 dark:text-white">{booking.serviceName}</h4>
                        <p className="text-xs text-gray-500">{new Date(booking.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {getStatusIcon(booking.status)}
                      <span className="ml-1 text-sm capitalize">{booking.status}</span>
                      <button 
                        onClick={() => handleCancelBooking(booking.id)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <FiXCircle />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              {bookings.length === 0 && (
                <p className="text-pink-700 dark:text-white text-center py-4">No bookings yet</p>
              )}
              {bookings.length > 3 && (
                <motion.button 
                  whileHover={{ x: 5 }}
                  onClick={() => navigate('/bookings')}
                  className="mt-4 text-gold text-sm hover:underline flex items-center"
                >
                  View all {bookings.length} bookings <span className="ml-1">→</span>
                </motion.button>
              )}
            </motion.section>

            {/* Testimonials Carousel */}
            <div className="mt-16 bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-center text-gold mb-6">Client Experiences</h3>
              <div className="relative h-40 overflow-hidden">
                {testimonials.map((t, index) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === activeTestimonial ? 1 : 0,
                      y: index === activeTestimonial ? 0 : 20
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-0 left-0 right-0 text-center p-4 ${index === activeTestimonial ? 'block' : 'hidden'}`}
                  >
                    <div className="flex justify-center mb-2">
                      {renderStars(t.rating)}
                    </div>
                    <p className="italic text-pink-700 dark:text-white mb-3">"{t.comment}"</p>
                    <p className="font-semibold text-pink-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">Service: {t.service}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full ${index === activeTestimonial ? 'bg-gold' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'courses' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-12"
          >
            <h2 className="text-3xl font-bold text-gold mb-6">Transform Your Beauty Skills</h2>
            <p className="text-pink-700 dark:text-white max-w-2xl mx-auto mb-8 text-lg">
              Explore our comprehensive online courses designed to take your beauty expertise to the next level.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-8 rounded-2xl max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-gold mb-4">What You'll Discover</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                <li className="flex items-start">
                  <FiCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Step-by-step professional techniques</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Industry secrets from Lilian's experience</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Downloadable resources and guides</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/courses')}
                className="bg-gold hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-lg"
              >
                Browse All Courses
              </motion.button>
            </motion.div>

            <div className="mt-12 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gold mb-6">Why Learn With Us?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/80 dark:bg-white/10 p-6 rounded-xl">
                  <div className="text-gold text-3xl mb-3">🎓</div>
                  <h4 className="font-bold text-pink-900 dark:text-white mb-2">Expert Instruction</h4>
                  <p className="text-sm text-pink-700 dark:text-white">Learn directly from Lilian's years of industry experience</p>
                </div>
                <div className="bg-white/80 dark:bg-white/10 p-6 rounded-xl">
                  <div className="text-gold text-3xl mb-3">🔄</div>
                  <h4 className="font-bold text-pink-900 dark:text-white mb-2">Flexible Learning</h4>
                  <p className="text-sm text-pink-700 dark:text-white">Study at your own pace, anytime, anywhere</p>
                </div>
                <div className="bg-white/80 dark:bg-white/10 p-6 rounded-xl">
                  <div className="text-gold text-3xl mb-3">🤝</div>
                  <h4 className="font-bold text-pink-900 dark:text-white mb-2">Community Support</h4>
                  <p className="text-sm text-pink-700 dark:text-white">Join our network of beauty professionals</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'training' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-10"
          >
            <h2 className="text-3xl font-bold text-gold mb-4">Live Training Sessions</h2>
            <p className="text-pink-700 dark:text-white max-w-2xl mx-auto mb-8">
              Join Lilian for monthly live training via Zoom or WhatsApp. Learn real skills with real-time support, Q&A,
              and demo walkthroughs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-lg">
                <div className="text-gold text-4xl font-bold mb-3">01</div>
                <h3 className="text-xl font-bold text-pink-900 dark:text-white mb-2">Basic Techniques</h3>
                <p className="text-sm text-pink-700 dark:text-white">Master foundational skills with step-by-step guidance</p>
              </div>
              <div className="bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-lg">
                <div className="text-gold text-4xl font-bold mb-3">02</div>
                <h3 className="text-xl font-bold text-pink-900 dark:text-white mb-2">Advanced Methods</h3>
                <p className="text-sm text-pink-700 dark:text-white">Learn professional techniques used in top salons</p>
              </div>
              <div className="bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-lg">
                <div className="text-gold text-4xl font-bold mb-3">03</div>
                <h3 className="text-xl font-bold text-pink-900 dark:text-white mb-2">Business Skills</h3>
                <p className="text-sm text-pink-700 dark:text-white">Get insider tips for building your beauty business</p>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-lg max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-gold mb-3">Next Session</h3>
              <div className="text-pink-900 dark:text-white font-bold text-lg mb-2">Advanced Lash Application</div>
              <div className="text-pink-700 dark:text-white mb-4">July 15, 2023 | 2:00 PM GMT</div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://wa.me/233XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition"
                >
                  <FaWhatsapp className="mr-2" /> Join WhatsApp Group
                </a>
                <button className="mt-2 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition">
                  <FiPlay className="mr-2" /> Zoom Meeting
                </button>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto text-left bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gold mb-3">What to Expect</h3>
              <ul className="space-y-2 text-pink-700 dark:text-white">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Live demonstrations with multiple camera angles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Interactive Q&A sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Downloadable course materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Certificate of participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Access to session recording for 30 days</span>
                </li>
              </ul>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-900 dark:text-white mb-2">{selectedService.title}</h3>
                <div className="flex items-center mb-4">
                  {renderStars(selectedService.popularity)}
                  <span className="text-gray-500 text-sm ml-2">({selectedService.popularity} rating)</span>
                  <span className="mx-3 text-gray-300">|</span>
                  <span className="text-gray-500 text-sm">{selectedService.duration}</span>
                </div>
                <p className="text-gold font-bold text-xl mb-4">{selectedService.price}</p>
                <p className="text-pink-700 dark:text-white mb-6">{selectedService.details}</p>
                
                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-pink-900 dark:text-white mb-2">What's Included</h4>
                  <ul className="space-y-2 text-pink-700 dark:text-white">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Professional-grade products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Sanitized tools and equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Personalized consultation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Aftercare instructions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleBookNow(selectedService)}
                    className="flex-1 py-3 rounded-full font-semibold bg-gold text-white hover:bg-yellow-600"
                  >
                    Book This Service
                  </motion.button>
                  <button className="px-6 py-3 border border-gold text-gold rounded-full font-semibold hover:bg-gold/10">
                    Ask a Question
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServicesWithProvider;