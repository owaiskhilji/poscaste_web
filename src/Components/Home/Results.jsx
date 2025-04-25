import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import heroImage from "../../assets/home/result.jpg";

export default function PodcastAgencyIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/bM4pTsXQE58";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div data-aos="fade-right" className="space-y-4">
            <span className="text-sm uppercase font-semibold text-green-500">Podcast Episode</span>
            <h2 className="text-3xl font-bold text-black leading-tight">
              Unlock New Ideas And Perspectives With Podcasts
            </h2>
            <p className="text-gray-700 text-sm">
              Natoque ridiculus imperdiet blandit metus ornare. Mauris interdum posuere ac cras conubia maximus auctor ligula lacus. Aenean convallis quisque iaculis sod porta class mus suscipit.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            PROFESSIONAL B2B PODCASTING MARKETING STRATEGIES THAT DELIVER RESULTS!
          </h2>
          <p className="text-gray-700 text-base mb-6">
            If you’ve tried conventional marketing approaches and received limited, or no success, and you now wish to reach a new demographic - podcasts are the ideal medium for doing just that.
          </p>
          <p className="text-gray-700 text-base mb-6">
            So, if you’ve thought about creating a podcast, but you need just a little, or indeed perhaps a lot of help! - it’s time to team up with a professional podcast marketing agency.
          </p>
            <button className="mt-4 bg-[#F97316] hover:bg-[#e36313] text-white font-medium px-6 py-2 rounded-md">
              Browse Episodes
            </button>
          </div>

          {/* Image Section */}
          <div className="relative" data-aos="zoom-in">
            <img
              src={heroImage}
              alt="Podcasting"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
            <button
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.66z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#F97316] hover:bg-[#e36313] text-white font-medium px-6 py-2 rounded-md"
          >
            View More
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
              <button className="btn" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
}