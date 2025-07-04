import { useState } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [appointmentDate, setAppointmentDate] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      appointment_date: appointmentDate
        ? appointmentDate.toDateString()
        : "Not selected",
      to_name: "Lilian",
      reply_to: formData.email
    };

    emailjs
      .send(
        "service_e50xlsr",
        "template_8ktx5h9",
        templateParams,
        "6yybQr5bKi-N0uTnU"
      )
      .then(() => {
        // WhatsApp Notification to Lilian
        const whatsappMsg = `NEW BOOKING!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nPreferred Date: ${appointmentDate?.toDateString() || 'Not selected'}`;
        const encodedMsg = encodeURIComponent(whatsappMsg);
        const whatsappURL = `https://wa.link/fzlib9=${encodedMsg}`;
        window.open(whatsappURL, "_blank");

        // Reset + Redirect
        setFormData({ name: "", email: "", message: "" });
        setAppointmentDate(null);
        navigate("/thank-you");
      })
      .catch((err) => {
        console.error("FAILED TO SEND", err);
        alert("Message failed to send. Please try again.");
      });
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-white/60 dark:bg-white/10 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto bg-white/80 dark:bg-white/5 p-8 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-bold text-gold text-center mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT: Info + Map */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-pink-900 dark:text-white">Get in Touch</h2>
            <p className="text-pink-700 dark:text-white">Reach out for Bookings, Training, or Glam Inquiries!</p>
            <p><strong>📍 Address:</strong> Along Bosco-UDS Road, Navrongo - Upper East</p>
            <p><strong>📧 Email:</strong> <a href="mailto:lilyluxe38@gmail.com" className="text-gold">lilyluxe38@gmail.com</a></p>
            <p><strong>📞 Phone:</strong> +233 53 498 0811</p>
            <div className="flex space-x-4 mt-4 text-gold text-lg">
              <a href="https://wa.link/fzlib9" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">Tiktok</a>
            </div>
            <iframe
              className="w-full h-48 rounded-xl mt-6"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.108837042738!2d-1.097128924690473!3d10.88535908924661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd9f8e7b3e3c6b5%3A0x5a5a5a5a5a5a5a5a!2sBosco-UDS%20Road%2C%20Navrongo!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
              title="Lily's Luxe Location"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* RIGHT: Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-pink-800 dark:text-white font-semibold">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gold rounded-xl bg-white/50"
              />
            </div>
            <div>
              <label className="block text-pink-800 dark:text-white font-semibold">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gold rounded-xl bg-white/50"
              />
            </div>
            <div>
              <label className="block text-pink-800 dark:text-white font-semibold">Preferred Appointment Date</label>
              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                className="w-full px-4 py-2 border border-gold rounded-xl bg-white/50"
                placeholderText="Choose a date"
                required
              />
            </div>
            <div>
              <label className="block text-pink-800 dark:text-white font-semibold">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gold rounded-xl bg-white/50"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}