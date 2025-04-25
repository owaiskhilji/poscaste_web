import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../assets/home/home1.jpg";
import image2 from "../../assets/home/home2.png";
import image3 from "../../assets/home/home3.png";

export default function PodcastFeatures() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Intro Paragraphs Section Side by Side */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-gray-300 pb-10 mb-10">
          <div className="md:w-1/2 pr-6" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-orange-500 mb-2 uppercase">FEATURES</h2>
            <h3 className="text-xl font-bold text-black mb-4">WE LISTEN!</h3>
            <p className="text-gray-700 text-base mb-4">
              The decision to start a podcast is not always an easy one, and there are many decisions that must be made before your first episode is aired.
            </p>
            <p className="text-gray-700 text-base">
              We’re confident that as the best B2B podcast agency, we have the right services to give your podcast the very best chance of success.
            </p>
          </div>
          <div className="md:w-1/2 pl-6 border-l border-gray-300 mt-10 md:mt-0" data-aos="fade-left">
            <p className="text-gray-700 text-base">
              We’ll take the time to attentively listen to your goals and ambitions for the show. We’ll help you to establish who your ideal customer is, and where we can find them. Your success is our success and we’ll do everything we can to ensure your content is heard by the people that matter.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="space-y-12">
          {[
            {
              title: "B2B Podcast Production Services",
             image :image1,
              subtitle: "Best Podcast Services",
              desc: "The best podcast services are right here. We have the relevant resources, professional experience and creative minds to get you the results you’re looking for!",
              button: "VIEW MORE B2B Podcast Services"
            },
            {
              title: "Blogs & Resources",
             image :image2,
              subtitle: "Best B2B Podcast Services",
              desc: "Podcasting is a great way to grow your audience and cultivate loyalty. Here are some up-and-coming podcasters you should check out!",
              button: "VIEW MORE B2B Podcast Editing"
            },
            {
              title: "Podcast Ideas",
            image :image3,
              subtitle: "",
              desc: "Are you struggling to come up with ideas for your next podcast episode? We are here to help. Our team will help consult, conceptualise and produce compelling podcasts ideas and concepts for you.",
              button: "VIEW MORE"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              {/* Left Content */}
              <div className="w-full lg:w-1/2 p-6">
                <h3 className="text-lg text-orange-500 font-semibold mb-1">{item.title}</h3>
                {item.subtitle && (
                  <h4 className="text-xl font-bold text-black mb-2">{item.subtitle}</h4>
                )}
                <p className="text-gray-700 text-base mb-4">{item.desc}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md">
                  {item.button}
                </button>
              </div>
              {/* Right Image */}
              <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                <img
                  src={item.image}
                  alt="Podcast Feature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
