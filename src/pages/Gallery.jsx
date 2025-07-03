import { useEffect, useState } from "react";

export default function Gallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="px-4 py-24 max-w-7xl mx-auto space-y-24">
      {/* --- Image Section --- */}
      <section>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-600 mb-4">Our Gallery</h1>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-amber-200 text-lg">
            Discover stunning beauty transformations by Lily's Luxe – where every detail matters.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-lg group relative">
              <img
                src={`/gallery/image${i + 1}.jpg`}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Video Section --- */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-600 mb-4">Our Beauty Tutorials & Reels</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-amber-200 text-lg">
            Watch our team in action – from brows to lashes to glam moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="aspect-video overflow-hidden rounded-xl shadow-lg group relative">
              <video
                className="w-full h-full object-cover"
                src={`/gallery/video${i + 1}.mp4`}
                controls
                autoPlay
                muted
                loop
              />
            </div>
          ))}
        </div>
      </section>

      <div className="text-center mt-12">
        <p className="text-sm text-gray-500 dark:text-gray-400">More images and videos coming soon...</p>
      </div>
    </div>
  );
}
