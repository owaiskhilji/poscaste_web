import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../../assets/home/hero.jpg"; 

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (

    <div className="overflow-y-hidden">
      {/* Hero Section */}
      
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center px-4 sm:px-8 md:px-12 overflow-hidden"
         style={{
    backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <div className="relative z-10 max-w-3xl text-white space-y-6 w-full">
          <p
            className="text-orange-500 uppercase tracking-wide text-sm sm:text-base font-semibold"
            data-aos="fade-down"
          >
            HIGH VALUE, PROFESSIONAL B2B PODCAST SERVICES
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-titillium"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            TEAM UP WITH A <br className="hidden sm:block" />
            LEADING PODCAST <br className="hidden sm:block" />
            PRODUCTION AGENCY
          </h1>

          <p
            className="text-gray-300 text-sm sm:text-base md:text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            TO GROW YOUR B2B BUSINESS. <br className="hidden sm:block" />
            Full Service Podcast Agency With Services Fully Tailored to Your Needs.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-titillium px-6 py-3 rounded-full transition duration-300 shadow-lg">
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </div>
   </div>
  );
}
