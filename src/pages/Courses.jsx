import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiClock, FiBookmark, FiShare2, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp, FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Courses() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState({});

  // Your courses data from Services.jsx
  const [courses] = useState([
    {
      id: 101,
      title: "Beginner Nail Tech Course",
      description: "Learn the art of sculpting nails, using tools, and mastering customer service.",
      price: "$49",
      videoLink: "#",
      lessons: 12,
      duration: "6 hours",
      students: 240,
      previewVideo: "https://example.com/preview1",
      category: "nails",
      level: "beginner",
      rating: 4.8,
      instructor: "Lilian Ampofo",
      thumbnail: "https://source.unsplash.com/600x400/?nail-art"
    },
    {
      id: 102,
      title: "Lash Mastery Program",
      description: "From classic to mega volume — a full course with downloadable guides and demos.",
      price: "$59",
      videoLink: "#",
      lessons: 15,
      duration: "8 hours",
      students: 180,
      previewVideo: "https://example.com/preview2",
      category: "lashes",
      level: "advanced",
      rating: 4.9,
      instructor: "Lilian Ampofo",
      thumbnail: "https://source.unsplash.com/600x400/?eyelash"
    },
    {
      id: 103,
      title: "Advanced Brow Shaping",
      description: "Master the art of perfect brows with microblading and tinting techniques.",
      price: "$45",
      videoLink: "#",
      lessons: 10,
      duration: "5 hours",
      students: 150,
      previewVideo: "https://example.com/preview3",
      category: "brows",
      level: "intermediate",
      rating: 4.7,
      instructor: "Lilian Ampofo",
      thumbnail: "https://source.unsplash.com/600x400/?eyebrow"
    }
  ]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (id) => {
    setIsFavorite(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-400" />);
      }
    }
    return stars;
  };

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab || course.level === activeTab);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
          Master Beauty with Lilian
        </h1>
        <p className="text-lg text-gray-700 dark:text-amber-200 max-w-3xl mx-auto">
          Professional training programs to elevate your skills, whether you're starting out or leveling up your expertise.
        </p>
      </motion.div>

      {/* Course Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['all', 'nails', 'lashes', 'brows', 'beginner', 'intermediate', 'advanced'].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
              activeTab === tab
                ? 'bg-amber-600 text-white'
                : 'bg-white dark:bg-gray-800 text-amber-600 border border-amber-600'
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Courses Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md animate-pulse">
              <div className="aspect-video bg-amber-100 dark:bg-gray-700"></div>
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedCourse(course)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition"
                >
                  <div className="bg-white p-3 rounded-full">
                    <FiPlay className="text-amber-600 text-xl" />
                  </div>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(course.id);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow"
                >
                  <FiBookmark className={isFavorite[course.id] ? "text-amber-600 fill-amber-600" : "text-gray-400"} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-amber-600">{course.title}</h3>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full capitalize">
                    {course.level}
                  </span>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{course.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(course.rating)}
                  </div>
                  <span className="text-xs text-gray-500">({course.rating})</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">
                    <div className="font-bold">{course.lessons}</div>
                    <div>Lessons</div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">
                    <div className="font-bold">{course.duration}</div>
                    <div>Duration</div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">
                    <div className="font-bold">{course.students}+</div>
                    <div>Students</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">{course.price}</span>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-amber-600">
                      <FiShare2 />
                    </button>
                    <button
                      onClick={() => navigate(`/course/${course.id}`)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center"
                    >
                      <FiPlay className="mr-1" /> Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Course Preview Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img 
                  src={selectedCourse.thumbnail} 
                  alt={selectedCourse.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-amber-600">{selectedCourse.title}</h2>
                  <div className="flex items-center">
                    {renderStars(selectedCourse.rating)}
                    <span className="ml-2 text-sm text-gray-500">({selectedCourse.rating})</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full capitalize">
                    {selectedCourse.level}
                  </span>
                  <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                    {selectedCourse.lessons} Lessons
                  </span>
                  <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                    {selectedCourse.duration}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedCourse.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-amber-600 mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Professional techniques used in top salons</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Step-by-step demonstrations</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Downloadable resources and guides</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-amber-600">{selectedCourse.price}</p>
                    <p className="text-sm text-gray-500">One-time payment</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="px-6 py-3 border border-amber-600 text-amber-600 rounded-full font-medium hover:bg-amber-50 dark:hover:bg-amber-900/10">
                      Sample Lesson
                    </button>
                    <button
                      onClick={() => navigate(`/course/${selectedCourse.id}`)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium flex items-center"
                    >
                      <FiPlay className="mr-2" /> Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-24 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-8 rounded-2xl text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4">Need Guidance Choosing a Course?</h2>
        <p className="text-gray-700 dark:text-amber-200 mb-6 max-w-2xl mx-auto">
          Our beauty education advisors can help you select the perfect course for your goals and skill level.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium flex items-center">
            <FiMessageSquare className="mr-2" /> Chat with Advisor
          </button>
          <a
            href="https://wa.me/233XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium flex items-center"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}