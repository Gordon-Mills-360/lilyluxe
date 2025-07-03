export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white/70 dark:bg-black text-center">
      <div className="bg-white/80 dark:bg-white/10 p-10 rounded-3xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-gold mb-4">Thank You! 🎉</h1>
        <p className="text-pink-800 dark:text-white mb-4">
          Your message has been sent successfully. We’ll get back to you shortly.
        </p>
        <a
          href="/"
          className="inline-block mt-4 bg-gold text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
