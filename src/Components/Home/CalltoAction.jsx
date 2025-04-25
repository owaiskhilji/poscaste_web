import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import resultImage from "../../assets/home/result.jpg";

export default function CalltoAction() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
          Ready to Grow Your <span className="text-orange-500">Business</span> with a Podcast?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mb-6">
          Running a B2B business is a full time job, why not let the best B2B podcast company for your needs handle all of your production, editing, distribution, micro-content creation, marketing and revenue generation.
        </p>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mb-10">
          Our help and support doesn't end after your show goes live for the first time. Choose a B2B podcasting agency that is there for you at every step on your podcasting journey - Choose <span className="font-semibold">Podcast Choice</span>!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
          Contact Us Now
        </button>
      </div>
    </div>
  );
}
