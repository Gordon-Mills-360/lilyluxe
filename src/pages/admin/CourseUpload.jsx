import { useState } from "react";

export default function CourseUpload() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    videoUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Course:", formData);
    alert("Course uploaded! (In real app, this goes to Supabase)");
    setFormData({ title: '', description: '', price: '', videoUrl: '' });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white/70 dark:bg-white/10 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gold mb-4 text-center">Upload New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-full"
        />
        <textarea
          placeholder="Course Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-xl"
        />
        <input
          type="text"
          placeholder="Video URL (YouTube / Vimeo / Embed)"
          value={formData.videoUrl}
          onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-full"
        />
        <input
          type="number"
          placeholder="Price (USD)"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-full"
        />
        <button type="submit" className="bg-gold hover:bg-yellow-600 text-white py-2 px-6 rounded-full font-bold w-full">
          Upload Course
        </button>
      </form>
    </div>
  );
}
