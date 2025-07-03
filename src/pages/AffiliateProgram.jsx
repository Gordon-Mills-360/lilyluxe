// src/pages/AffiliateProgram.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const commissionTiers = [
  {
    level: "Starter",
    sales: "0 - $500",
    rate: "15%",
    perks: ["Basic tracking dashboard", "Monthly payouts", "Standard marketing materials"]
  },
  {
    level: "Influencer",
    sales: "$501 - $2,000",
    rate: "18%",
    perks: ["Advanced analytics", "Bi-weekly payouts", "Customizable links", "Exclusive promotions"]
  },
  {
    level: "Elite",
    sales: "$2,001+",
    rate: "22%",
    perks: ["Dedicated account manager", "Weekly payouts", "VIP product samples", "Co-branded campaigns"]
  }
];

const successStories = [
  {
    name: "Sarah K.",
    role: "Beauty Blogger",
    earnings: "$3,200",
    quote: "Lily's Luxe affiliate program helped me monetize my passion while introducing my audience to premium products they love."
  },
  {
    name: "Marcus T.",
    role: "Salon Owner",
    earnings: "$8,750",
    quote: "By recommending Lily's courses to my clients, I've created an additional revenue stream for my business."
  },
  {
    name: "Jasmine L.",
    role: "Instagram Influencer",
    earnings: "$12,400",
    quote: "The high commission rates and beautiful products make this the most rewarding program I've joined."
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

export default function AffiliateProgram() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialMedia: "",
    audienceSize: "",
    promoMethods: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newMethods = checked 
        ? [...prev.promoMethods, value]
        : prev.promoMethods.filter(method => method !== value);
      return { ...prev, promoMethods: newMethods };
    });
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
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium"
          >
            Earn While You Share Beauty
          </motion.div>
          <h1 className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-6">
            Lily's Luxe Affiliate Program
          </h1>
          <p className="text-xl text-gray-700 dark:text-amber-100 max-w-3xl mx-auto">
            Turn your influence into income. Earn generous commissions for every customer you refer to our luxury beauty products and services.
          </p>
          <div className="mt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              onClick={() => document.getElementById("application").scrollIntoView({ behavior: 'smooth' })}
            >
              Join Now - It's Free
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div variants={fadeIn} className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-700 dark:to-amber-800 rounded-2xl p-8 text-white shadow-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">22%</div>
              <div className="text-amber-100 dark:text-amber-200">Highest Commission Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45 Days</div>
              <div className="text-amber-100 dark:text-amber-200">Cookie Duration</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$150+</div>
              <div className="text-amber-100 dark:text-amber-200">Average Order Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Instant</div>
              <div className="text-amber-100 dark:text-amber-200">Link Generation</div>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
            How Our Affiliate Program Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                ),
                title: "1. Sign Up",
                description: "Complete our quick application form. Approval typically takes 1-2 business days."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                ),
                title: "2. Share Your Link",
                description: "Use your unique affiliate link in social bios, content, emails, or anywhere online."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "3. Earn Commissions",
                description: "Get paid for every sale originating from your link. Payouts every 15 days."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-amber-100 dark:border-gray-700 transition-all duration-300 text-center"
              >
                <div className="text-amber-500 dark:text-amber-400 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commission Tiers */}
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
            Performance-Based Commission Tiers
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {commissionTiers.map((tier, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl overflow-hidden shadow-lg ${index === 1 ? "transform lg:scale-105 z-10 border-2 border-amber-400 dark:border-amber-500" : "border border-gray-200 dark:border-gray-700"}`}
              >
                <div className={`${index === 1 ? "bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-700 dark:to-amber-800" : "bg-gray-100 dark:bg-gray-700"} p-4 text-center`}>
                  <h3 className={`text-xl font-bold ${index === 1 ? "text-white" : "text-gray-800 dark:text-white"}`}>{tier.level} Tier</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-amber-600 dark:text-amber-400">{tier.rate}</span>
                    <span className="text-gray-600 dark:text-gray-300"> commission</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">For sales of {tier.sales}</p>
                  </div>
                  <ul className="space-y-3">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{perk}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 1 && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full mt-8 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-all duration-300"
                      onClick={() => document.getElementById("application").scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get This Tier
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div variants={fadeIn} className="mb-20 bg-amber-50 dark:bg-gray-800 rounded-2xl p-8 shadow-inner">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            Affiliate Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300 font-bold mr-4">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium">{story.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{story.role}</p>
                    <div className="text-amber-600 dark:text-amber-400 font-semibold mt-1">Earned: {story.earnings}</div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Tools */}
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
            Powerful Marketing Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔗",
                title: "Smart Links",
                description: "Track clicks and conversions with your custom affiliate links"
              },
              {
                icon: "📊",
                title: "Real-Time Dashboard",
                description: "Monitor your performance, earnings, and traffic sources"
              },
              {
                icon: "🖼️",
                title: "Creative Assets",
                description: "Access high-quality product images and promotional content"
              },
              {
                icon: "📱",
                title: "Link Generator",
                description: "Create deep links to specific products or collections"
              }
            ].map((tool, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-amber-100 dark:border-gray-700"
              >
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-3">{tool.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div 
          variants={fadeIn}
          id="application"
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-20"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-6">Ready to Start Earning?</h2>
              <p className="mb-6 text-amber-100 dark:text-amber-200">
                Join our affiliate program today and start monetizing your audience with premium beauty products.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 text-amber-200 dark:text-amber-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">No upfront costs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 text-amber-200 dark:text-amber-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Instant approval for qualified applicants</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 text-amber-200 dark:text-amber-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Dedicated affiliate support</p>
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
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Application Received!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">We'll review your information and get back to you within 2 business days.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name*</label>
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
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address*</label>
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
                      <label htmlFor="socialMedia" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Primary Social Media Handle</label>
                      <input
                        type="text"
                        id="socialMedia"
                        name="socialMedia"
                        value={formData.socialMedia}
                        onChange={handleChange}
                        placeholder="@yourusername"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="audienceSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Approximate Audience Size*</label>
                      <select
                        id="audienceSize"
                        name="audienceSize"
                        required
                        value={formData.audienceSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select audience size</option>
                        <option value="1k-10k">1,000 - 10,000</option>
                        <option value="10k-50k">10,000 - 50,000</option>
                        <option value="50k-100k">50,000 - 100,000</option>
                        <option value="100k+">100,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">How will you promote Lily's Luxe? (Select all that apply)</label>
                      <div className="space-y-2">
                        {["Social Media", "Blog/Website", "Email List", "YouTube", "In-Person Events", "Other"].map((method) => (
                          <div key={method} className="flex items-center">
                            <input
                              id={`method-${method}`}
                              name="promoMethods"
                              type="checkbox"
                              value={method}
                              checked={formData.promoMethods.includes(method)}
                              onChange={handleCheckboxChange}
                              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`method-${method}`} className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                              {method}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-all duration-300"
                      >
                        Apply to Join Program
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">Affiliate Program FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I get paid?",
                answer: "We offer payments via PayPal, direct deposit, or wire transfer (for international affiliates). Payouts are processed every 15 days once you reach the $50 minimum threshold."
              },
              {
                question: "How long do referral cookies last?",
                answer: "Our cookies last for 45 days, meaning you'll earn commission on any purchases made within 45 days of clicking your affiliate link."
              },
              {
                question: "Can I promote Lily's Luxe on multiple platforms?",
                answer: "Absolutely! You can promote through any channel - social media, blogs, email, YouTube, etc. We provide tracking links for each platform."
              },
              {
                question: "Is there a cost to join?",
                answer: "No, joining our affiliate program is completely free. We only make money when you make money."
              },
              {
                question: "What products can I promote?",
                answer: "You can promote our entire product line including skincare, makeup, haircare, and beauty tools. Some seasonal or limited edition products may have special commission rates."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.005 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">{faq.question}</h3>
                  <svg 
                    className={`w-6 h-6 text-amber-600 dark:text-amber-400 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
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

        {/* CTA */}
        <motion.div variants={fadeIn} className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Our affiliate team is happy to help you get started and maximize your earnings.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Our Affiliate Team
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}