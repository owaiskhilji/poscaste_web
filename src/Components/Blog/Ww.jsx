import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ww() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

return (
    <section
      className="relative w-full py-16 bg-cover bg-center px-4 sm:px-8 md:px-12 text-white"
      style={{
        backgroundImage: "url('./ss 2.png')",
      }}
      data-aos="fade-up"
    >
      {/* Optional orange overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 opacity-70 z-0 mix-blend-multiply" />
  
      <div className="relative z-10 container mx-auto text-center space-y-10">
        <h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Producing a podcast takes commitment, focus, and drive.
        </h2>
  
        <p
          className="max-w-2xl mx-auto text-white sm:text-lg opacity-95"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We’ll take the weight off your shoulders—handling production, editing,
          distribution, content creation, marketing, and sales support so you can focus
          on your expertise.
        </p>
      </div>
    </section>
  );
}