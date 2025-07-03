// src/pages/Partnership.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const partnershipTypes = [
  {
    title: "Salon Partnerships",
    icon: "✂️",
    description: "Collaborate with our network of luxury salons to expand your reach and offer premium services.",
    benefits: [
      "Cross-promotion opportunities",
      "Shared client management system",
      "Staff training programs"
    ]
  },
  {
    title: "Influencer Collaborations",
    icon: "🌟",
    description: "Join our beauty influencer network and get access to exclusive products and sponsorship deals.",
    benefits: [
      "Commission-based earnings",
      "Early product access",
      "Creative freedom"
    ]
  },
  {
    title: "Vendor Programs",
    icon: "🛍️",
    description: "Supply your premium beauty products through our established distribution channels.",
    benefits: [
      "Large customer base",
      "Marketing support",
      "Inventory management"
    ]
  },
  {
    title: "Education Partners",
    icon: "🎓",
    description: "Partner with our beauty education programs to train the next generation of professionals.",
    benefits: [
      "Curriculum development",
      "Certification programs",
      "Student placement"
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Partnership() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    partnershipType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-6">
            Elevate Together
          </h1>
          <p className="text-xl text-gray-700 dark:text-amber-100 max-w-3xl mx-auto">
            Join forces with Lily's Luxe Beauty to create extraordinary experiences and grow your business in the beauty industry.
          </p>
          <div className="mt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: 'smooth' })}
            >
              Start Partnership Journey
            </motion.button>
          </div>
        </motion.div>

        {/* Partnership Types */}
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
            Our Partnership Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-amber-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-3">{type.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div variants={fadeIn} className="mb-20 bg-amber-50 dark:bg-gray-800 rounded-2xl p-8 shadow-inner">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            Partnership Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300 font-bold mr-4">JD</div>
                <div>
                  <h4 className="font-medium">Jane Doe</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Salon Owner</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"Partnering with Lily's Luxe transformed our business. Our revenue increased by 40% within 6 months through their referral network."</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300 font-bold mr-4">MB</div>
                <div>
                  <h4 className="font-medium">Marcus Brown</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product Vendor</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"The distribution channels provided by Lily's Luxe helped us reach customers we never could have accessed on our own."</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300 font-bold mr-4">SC</div>
                <div>
                  <h4 className="font-medium">Sarah Chen</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Beauty Influencer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"The creative freedom and support I get as a Lily's Luxe partner is unmatched in the industry. My following grew by 125%!"</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeIn} className="mb-20">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-700 dark:to-amber-800 rounded-2xl p-8 text-white shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-10">Why Partner With Us?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-amber-100 dark:text-amber-200">Successful Partnerships</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-amber-100 dark:text-amber-200">Average Revenue Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5M+</div>
                <div className="text-amber-100 dark:text-amber-200">Combined Audience Reach</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-amber-100 dark:text-amber-200">Partner Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          variants={fadeIn}
          id="contact-form"
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-6">Let's Create Something Beautiful</h2>
              <p className="mb-6 text-amber-100 dark:text-amber-200">
                Fill out the form to start your partnership journey with Lily's Luxe Beauty. Our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 text-amber-200 dark:text-amber-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">partnership@lilysluxe.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 text-amber-200 dark:text-amber-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-10">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Your partnership request has been submitted. We'll contact you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company/Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Partnership Interest</label>
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select partnership type</option>
                        <option value="salon">Salon Partnership</option>
                        <option value="influencer">Influencer Collaboration</option>
                        <option value="vendor">Vendor Program</option>
                        <option value="education">Education Partner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                      ></textarea>
                    </div>
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-all duration-300"
                      >
                        Submit Partnership Request
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div variants={fadeIn} className="mt-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What are the requirements to become a partner?",
                answer: "Requirements vary by partnership type but generally include professional credentials, quality standards alignment, and a shared commitment to excellence in beauty services."
              },
              {
                question: "How long does the approval process take?",
                answer: "Most partnership applications are reviewed within 3-5 business days. Some programs may require additional evaluation time."
              },
              {
                question: "Is there any cost to join the partnership program?",
                answer: "Most of our partnerships are revenue-sharing models with no upfront costs. Some premium programs may have nominal fees."
              },
              {
                question: "Can I partner in multiple categories?",
                answer: "Absolutely! Many of our partners collaborate across multiple programs to maximize their opportunities."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.005 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">{faq.question}</h3>
                  <svg 
                    className={`w-6 h-6 text-amber-600 dark:text-amber-400 transform transition-transform ${activeTab === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeTab === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}