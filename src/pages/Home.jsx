import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-400 to-amber-300 flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="animate-bounce mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="text-white font-bold text-xl">Loading a Glossy Polished Perfeection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 px-4">
      {/* Hero Section */}
      <section id="home" className="text-center pt-32 pb-24 bg-gradient-to-br from-pink-400 to-amber-300 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-white/30 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-white/30 animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/20 animate-pulse delay-700"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Lily's Nail Luxe
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
            Where elegance meets expertise. Your go-to destination for flawless nails, lashes, brows & glam.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/book')}
              className="bg-white hover:bg-white/90 text-pink-600 px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 animate-bounce"
            >
              <span>Book an Appointment</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto text-center space-y-6 py-16">
        <div className="inline-block relative">
          <h2 className="text-4xl font-bold text-pink-600 relative z-10">About Us</h2>
          <div className="absolute -bottom-1 left-0 w-full h-2 bg-pink-300/50 z-0"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-4">
            <p className="text-lg text-gray-800 leading-relaxed">
              At <span className="font-bold text-pink-600">Lily's Nails Luxe</span>, we specialize in enhancing your natural beauty with precision and passion. With years of experience and a deep love for the craft, our founder Lilian has built a reputation for excellence and luxury.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
              Whether you're prepping for a big event or treating yourself to a beauty boost, you're in the right place. Our mission is to make every client feel pampered and confident.
            </p>
          </div>
          <div className="text-center relative group">
            <div className="absolute -inset-2 bg-pink-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            <img
              src="/images/founder.jpg"
              alt="Founder"
              className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto relative z-10 transform group-hover:scale-105 transition-transform"
            />
            <p className="mt-4 font-bold text-pink-600 group-hover:text-pink-700 transition-colors">Lilian • Founder & CEO</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-br from-pink-50 to-amber-50 rounded-3xl shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Why Choose Us</h2>
          <p className="max-w-2xl mx-auto text-pink-700">
            We go above and beyond to provide an exceptional beauty experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Certified Expertise",
              description: "Our team is trained and certified in top-tier beauty techniques with years of hands-on experience."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Luxurious Experience",
              description: "Enjoy our serene, elegant salon designed for your comfort with premium amenities."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              ),
              title: "Premium Products",
              description: "We use only the highest quality, cruelty-free products for lasting, beautiful results."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-amber-300 rounded-full flex items-center justify-center mb-6 text-white mx-auto transition-all group-hover:rotate-12">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-pink-600 mb-3 text-center">{item.title}</h3>
              <p className="text-gray-700 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-6xl mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Our Signature Services</h2>
          <p className="max-w-2xl mx-auto text-pink-700">
            Indulge in our most popular treatments
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Gel Nails",
              price: "From $45",
              description: "Long-lasting, chip-resistant manicure with glossy finish",
              icon: "💅",
              color: "bg-pink-100"
            },
            {
              name: "Lash Extensions",
              price: "From $120",
              description: "Custom volume lashes for a dramatic, eye-opening effect",
              icon: "👁️",
              color: "bg-amber-100"
            },
            {
              name: "Eyebrow Tinting",
              price: "From $35",
              description: "Enhance and define your brows with semi-permanent color",
              icon: "✏️",
              color: "bg-pink-100"
            }
          ].map((service, idx) => (
            <div 
              key={idx} 
              className={`${service.color} p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h4 className="text-xl font-bold text-pink-700 mb-2 text-center">{service.name}</h4>
              <p className="text-sm text-gray-700 mb-3 text-center">{service.description}</p>
              <div className="flex justify-center">
                <span className="text-pink-600 font-bold text-lg">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-16 bg-gradient-to-br from-pink-50 to-amber-50 rounded-3xl shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Client Love</h2>
          <p className="max-w-2xl mx-auto text-pink-700">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {[
            { 
              name: "Sarah A.", 
              quote: "Absolutely loved my nails! The attention to detail is unmatched. I get compliments everywhere I go!", 
              rating: "★★★★★"
            },
            { 
              name: "Tina K.", 
              quote: "Best lash tech in town! I felt like a queen during my appointment and the results lasted weeks.", 
              rating: "★★★★★"
            },
            { 
              name: "Rebecca M.", 
              quote: "Great service, beautiful ambiance, and top quality products. Worth every penny for the confidence boost!", 
              rating: "★★★★☆"
            },
          ].map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl shadow-md relative hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-pink-400 to-amber-300 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="italic text-gray-800 mb-4">"{t.quote}"</p>
              <div className="flex justify-between items-center">
                <p className="font-bold text-pink-600">{t.name}</p>
                <span className="text-amber-400 text-sm">{t.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Our Work</h2>
          <p className="max-w-2xl mx-auto text-pink-700">
            A glimpse of our beauty transformations
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/gallery/image1.jpg",
            "/gallery/image2.jpg",
            "/gallery/image3.jpg",
            "/gallery/image4.jpg",
            "/gallery/image5.jpg",
            "/gallery/image8.jpg",
            "/gallery/image7.jpg",
            "/gallery/image6.jpg"
          ].map((imgSrc, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-xl shadow-md overflow-hidden group relative hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <img 
                src={imgSrc} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center py-16 bg-gradient-to-r from-pink-400 to-amber-300 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Glow?</h2>
        <p className="max-w-2xl mx-auto text-white/90 mb-8">
          Book your appointment today and experience the Lily's Luxe difference
        </p>
        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/book')}
            className="bg-white hover:bg-white/90 text-pink-600 px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 bg-gradient-to-br from-pink-600 to-amber-400 text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Lily's Nail Luxe</h3>
          <p className="mb-6 max-w-lg mx-auto">
            123 Beauty Lane, Glamour City | Open Tue-Sat: 9AM-7PM
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Lily's Nail Luxe. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50 transition-all transform hover:scale-110 animate-pulse"
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163a11.933 11.933 0 01-1.587-5.945C.157 5.355 5.513 0 12.066 0c3.222 0 6.24 1.26 8.511 3.532a11.918 11.918 0 013.52 8.51c-.003 6.555-5.36 11.91-11.914 11.91a11.95 11.95 0 01-5.927-1.6L.057 24zm6.597-3.807c1.74.995 3.27 1.591 5.412 1.593 5.448 0 9.886-4.434 9.889-9.878a9.824 9.824 0 00-2.899-6.991A9.837 9.837 0 0012.065 2.1c-5.452 0-9.888 4.437-9.888 9.884a9.869 9.869 0 001.603 5.36l-.999 3.648 3.473-.879zM17.4 14.537c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.668-1.612-.916-2.207-.242-.579-.487-.5-.668-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.488 1.694.623.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.29.173-1.412-.074-.123-.273-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  );
}