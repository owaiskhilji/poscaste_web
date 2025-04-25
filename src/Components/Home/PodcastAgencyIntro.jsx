import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import heroImage from "../../assets/home/about.png";

export default function PodcastAgencyIntro() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const videoSrc = "https://www.youtube.com/embed/bM4pTsXQE58";

  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <img
           src={heroImage}
            alt="Podcasting"
            className="rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setIsOpen(true)}
          />
          {/* Play Video Link */}
          <button
            className="mt-4 text-sm font-medium text-[#F97316] hover:underline"
            onClick={() => setIsOpen(true)}
          >
           
          </button>
        </div>

        {/* Content Section */}
        <div data-aos="fade-left" className="space-y-4">
          <h3 className="text-black uppercase text-sm font-bold tracking-wide">
            What Can a Podcast Production Agency Help You With?
          </h3>
          <h2 className="text-black text-3xl font-bold text-base-content">
            More Than Just Mics & Guests
          </h2>
          <ul className=" text-black list-disc list-inside text-base-content space-y-1">
            <li>Continuous brand recall</li>
            <li>Focused Marketing</li>
            <li>Elevate your brand identity</li>
            <li>Establishing yourself as a thought leader</li>
            <li>A rewarding, creative endeavour</li>
            <li>Connect with like-minded people in your industry</li>
          </ul>
          <p className=" text-black text-sm text-base-content opacity-80">
            B2B podcasting goes beyond just creating content. From marketing,
            SEO, branding, to production, agencies like Podcast Choice can take
            it all off your shoulders so you can focus on growth.
          </p>

          <button
            className="btn mt-4 bg-[#F97316] border-none hover:bg-[#e36313]"
            onClick={() => setIsOpen(true)}
          >
            ▶ View More
          </button>
        </div>
      </div>

      {/* Modal with Embedded YouTube */}
      {isOpen && (
        <dialog className="modal modal-open">
          <form method="dialog" className="modal-box p-0 overflow-hidden">
            <div className="w-full h-64 md:h-96">
              <iframe
                width="100%"
                height="100%"
                src={videoSrc}
                title="Podcast Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
}
