import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function B2BPodcastIntro() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div
        className="max-w-5xl mx-auto space-y-6"
        data-aos="fade-up"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800"
          data-aos="fade-down"
        >
          Stepping Into the World of B2B Podcasting
        </h2>

        <p
          className="text-gray-600 text-base sm:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          If you are new to the world of B2B podcasting then you should be aware
          that it can take commitment, focus, and drive to come up with a concept
          for a podcast show, and to then find appropriate guests to interview and
          produce high value content on a regular basis.
        </p>

        <p
          className="text-gray-600 text-base sm:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          The rewards for building a podcast brand and generating a following of loyal
          listeners are well worth the effort though, and if you weren’t already aware,
          there is specialist help out there to help B2B businesses, and that help comes
          in the form of podcast production agencies.
        </p>

        <div
          className="bg-gradient-to-r from-orange-500 to-yellow-400 p-6 rounded-2xl shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <p className="text-white text-base sm:text-lg font-medium">
            B2B podcast agencies such as <strong>Podcast Choice</strong> can take much of the
            weight off of your shoulders by removing the burden of producing, editing,
            distribution, content creation, marketing and driving sales. This allows you
            to focus your attention on your B2B business.
          </p>
        </div>
      </div>
    </section>
  );
}