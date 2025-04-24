import React from "react";

const data = [
  { title: "🎬 Production", desc: "Professional audio/video setup" },
  { title: "📝 Content Creation", desc: "Scriptwriting & storyboarding" },
  { title: "📢 Marketing", desc: "Promo strategy & social snippets" },
  { title: "🚀 Distribution", desc: "Publishing across all platforms" },
  { title: "🎙️ Guest Sourcing", desc: "Connect with top industry voices" },
]

const B2b1 = () => {
  return (
    <div >
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-32 mt-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div>
      <h2 className="font-titillium text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        PODCASTS CAN REALLY HELP YOUR B2B BUSINESS DRIVE SALES
      </h2>
      <p className="font-inter text-lg text-gray-600 mb-6">
        But it takes commitment, focus, and drive to get there. We can help with all aspects of B2B podcasting including:
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {data.map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-titillium text-xl font-semibold text-textcolor mb-1">{item.title}</h3>
          <p className="font-inter text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>
  
  
  </div>

  );
};

export default B2b1;
