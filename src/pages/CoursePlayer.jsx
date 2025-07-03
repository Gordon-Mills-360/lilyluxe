import { useParams } from "react-router-dom";
import { useState } from "react";

const dummyCourse = {
  id: "1",
  title: "Lash Mastery",
  description: "Master the art of lash extensions.",
  videoUrl: "https://www.youtube.com/embed/FuY0K48xQvI", // replace this
  price: "$59"
};

export default function CoursePlayer() {
  const { id } = useParams();
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    alert("Payment successful! (Future: Stripe or Flutterwave)");
    setPaid(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-gold mb-4">{dummyCourse.title}</h2>
      <p className="mb-4 text-pink-700 dark:text-white">{dummyCourse.description}</p>

      {!paid ? (
        <div className="text-center">
          <p className="mb-4 font-semibold text-lg">Price: {dummyCourse.price}</p>
          <button onClick={handlePayment} className="bg-gold hover:bg-yellow-600 text-white py-2 px-6 rounded-full font-bold">
            Pay Now to Access
          </button>
        </div>
      ) : (
        <div className="aspect-video w-full mt-6">
          <iframe
            src={dummyCourse.videoUrl}
            title="Course Video"
            frameBorder="0"
            allowFullScreen
            className="w-full h-96 rounded-xl"
          ></iframe>
        </div>
      )}
    </div>
  );
}
