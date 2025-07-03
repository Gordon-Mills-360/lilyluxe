import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { FiCheck, FiCalendar, FiUser, FiMail, FiPhone, FiScissors, FiAlertCircle, FiClock } from "react-icons/fi";

// Mock database of booked appointments (in a real app, this would come from an API)
const bookedAppointments = [
  new Date(2023, 11, 15, 10, 0), // December 15, 2023 at 10:00 AM
  new Date(2023, 11, 15, 14, 30), // December 15, 2023 at 2:30 PM
  new Date(2023, 11, 16, 11, 0), // December 16, 2023 at 11:00 AM
  new Date(2023, 11, 16, 16, 0), // December 16, 2023 at 4:00 PM
];

export default function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.booking || {};
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: bookingData.serviceName || "Select Service",
    notes: ""
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookingStatus, setBookingStatus] = useState(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);

  // Generate available time slots (every 30 minutes from 9am to 6pm)
  useEffect(() => {
    const times = [];
    for (let hour = 9; hour <= 18; hour++) {
      times.push(new Date().setHours(hour, 0, 0, 0));
      if (hour < 18) {
        times.push(new Date().setHours(hour, 30, 0, 0));
      }
    }
    setAvailableTimes(times);
  }, []);

  // Check availability when selected date changes
  useEffect(() => {
    if (selectedDate) {
      checkAvailability(selectedDate);
    } else {
      setBookingStatus(null);
    }
  }, [selectedDate]);

  const checkAvailability = (date) => {
    setIsCheckingAvailability(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const isBooked = bookedAppointments.some(appointment => 
        appointment.getTime() === date.getTime()
      );
      
      setBookingStatus(isBooked ? 'unavailable' : 'available');
      setIsCheckingAvailability(false);
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Don't submit if the selected time is unavailable
    if (bookingStatus === 'unavailable') {
      alert('Please select an available time slot before booking.');
      return;
    }
    
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      booking_date: selectedDate ? selectedDate.toString() : "Not selected",
      notes: formData.notes,
      price: bookingData.price || "Not specified"
    };

    try {
      await emailjs.send(
        "service_e50xlsr",
        "template_8ktx5h9",
        templateParams,
        "6yybQr5bKi-N0uTnU"
      );
      navigate("/thank-you", { 
        state: { 
          booking: {
            ...formData,
            date: selectedDate,
            serviceImage: bookingData.image
          } 
        } 
      });
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  const services = [
    "Lash Extensions",
    "Gel & Acrylic Nails",
    "Facials & Glow Treatment",
    "Eyebrow Tinting",
    "Makeup Application",
    "Full Body Waxing"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4 bg-gradient-to-br from-pink-50 to-amber-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-md mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-amber-200 dark:border-amber-600/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-amber-200/20 blur-xl"></div>
        <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-pink-200/20 blur-xl"></div>
        
        {/* Service Preview */}
        {bookingData.serviceName && (
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-6 p-4 bg-gradient-to-r from-pink-100 to-amber-100 dark:from-pink-900/30 dark:to-amber-900/30 rounded-xl flex items-center"
          >
            {bookingData.image && (
              <img 
                src={bookingData.image} 
                alt={bookingData.serviceName} 
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
            )}
            <div>
              <h3 className="font-bold text-pink-900 dark:text-white">{bookingData.serviceName}</h3>
              <p className="text-sm text-amber-800 dark:text-amber-200">{bookingData.price}</p>
            </div>
          </motion.div>
        )}

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-500 mb-2">
            Complete Your Booking
          </h1>
          <p className="text-amber-600/80 dark:text-amber-300/80 text-sm">
            {bookingData.serviceName ? "Almost there!" : "Let's create something beautiful together"}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full mx-auto mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* Name Field */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 flex items-center">
              <FiUser className="mr-2" /> Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-amber-200 dark:border-amber-600/30 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 flex items-center">
              <FiMail className="mr-2" /> Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-amber-200 dark:border-amber-600/30 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              placeholder="hello@example.com"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 flex items-center">
              <FiPhone className="mr-2" /> Phone Number
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-amber-200 dark:border-amber-600/30 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              placeholder="+1 (___) ___-____"
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 flex items-center">
              <FiScissors className="mr-2" /> Service
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-amber-200 dark:border-amber-600/30 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent appearance-none transition-all"
              required
            >
              <option value="" disabled>Select Service</option>
              {services.map((service, index) => (
                <option key={index} value={service} className="text-amber-900 dark:text-amber-100">
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 flex items-center">
              <FiCalendar className="mr-2" /> Preferred Date & Time
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              minDate={new Date()}
              includeTimes={availableTimes.map(time => new Date(time))}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-amber-200 dark:border-amber-600/30 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              placeholderText="Select date and time"
              required
            />
            
            {/* Availability Status */}
            {selectedDate && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg flex items-center text-sm font-medium ${
                  bookingStatus === 'available' 
                    ? 'bg-green-100/80 text-green-800 dark:bg-green-900/30 dark:text-green-200' 
                    : bookingStatus === 'unavailable' 
                      ? 'bg-red-100/80 text-red-800 dark:bg-red-900/30 dark:text-red-200' 
                      : 'bg-amber-100/80 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                }`}
              >
                {isCheckingAvailability ? (
                  <>
                    <svg className="animate-spin h-4 w-4 mr-2 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Checking availability...
                  </>
                ) : bookingStatus === 'available' ? (
                  <>
                    <FiCheck className="h-4 w-4 mr-2" />
                    This time slot is available! Proceed with your booking.
                  </>
                ) : bookingStatus === 'unavailable' ? (
                  <>
                    <FiAlertCircle className="h-4 w-4 mr-2" />
                    This time slot is already booked. Please choose another time.
                  </>
                ) : (
                  <>
                    <FiClock className="h-4 w-4 mr-2" />
                    Select a date and time to check availability
                  </>
                )}
              </motion.div>
            )}
          </div>

          {/* Additional Notes */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-amber-800 dark:text-amber-200">
              Additional Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-amber-200 dark:border-amber-600/30 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              placeholder="Special requests or allergies we should know about"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting || bookingStatus === 'unavailable'}
            className={`w-full bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
              isSubmitting || bookingStatus === 'unavailable' ? "opacity-70 cursor-not-allowed" : "hover:from-amber-600 hover:to-pink-600"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <FiCheck className="h-5 w-5" />
                Confirm Booking
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-6 text-center text-sm text-amber-700/80 dark:text-amber-300/80">
          <p>We'll confirm your appointment via email within 24 hours</p>
        </div>
      </div>
    </motion.div>
  );
}