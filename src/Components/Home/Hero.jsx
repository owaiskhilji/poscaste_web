import { useState, useEffect } from "react";
import slider1 from "../assets/silder/sli1.png";
import slider2 from "../assets/silder/sli2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  { image: slider1, alt: "Delicious British Dish" },
  { image: slider2, alt: "Elegant Fine Dining" }
];


export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative top-20 w-full h-screen bg-black flex justify-center items-center">

      <div className="relative  w-full h-full overflow-hidden">
        
        {/* Image Slider */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white px-6 text-center">
          <div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl md:text-6xl font-bold mb-4">
          Noor ul Huda Institute International
</h1>

            <p  className="text-md sm:text-lg md:text-xl lg:text-xl max-w-2xl mx-auto"  data-aos="fade-left">
            We offer authentic Islamic education including Quran recitation, Tajweed, Tafseer, and Deeni courses. Join us to connect with the Book of Allah and strengthen your understanding of Deen in a peaceful and spiritual environment.
                        </p>
            <button
             className="mt-6 px-3 py-2 sm:px-3 sm:py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 bg-textcolor text-white text-md sm:text-md md:text-lg lg:text-lg font-semibold rounded-lg shadow-md transition duration-300">
              Learning Now
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-600 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-600 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
