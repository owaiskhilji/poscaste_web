import React, { useState } from "react";

const faqData = [
  {
    question: "Is a B2B podcast something your business should be doing?",
    answer:
      "Raising brand awareness is certainly high up the list of common motivators for businesses wishing to start a podcast. Podcasts can be listened to by anyone with a smartphone or tablet, and businesses who turn to podcasting find new audiences to engage that they might otherwise struggle to reach.",
  },
  {
    question: "How much should you spend on B2B podcast production services?",
    answer:
      "As with everything — you get what you pay for. If your business or organisation is in a highly competitive sector then you’ll have to become very inventive to be noticed. Content marketing can be cost-effective, particularly so with the audio format. A professional service may charge £2000+ per month.",
  },
  {
    question: "Will I be able to keep producing enough content?",
    answer:
      "One common concern is content creation. But once you start, you'll discover limitless topics. The more you connect with people, the more content ideas you’ll have. Just begin!",
  },
  {
    question: "Will I have the technical ability to record and produce content?",
    answer:
      "You don’t need to be an IT wizard! A professional podcast team can guide you on gear, software, and even handle production. Just focus on your voice!",
  },
  {
    question: "Will I be able to handle the extra work associated with managing a podcast?",
    answer:
      "Yes! You define the workload and format. Episodes can be long or short, formal or casual. A good provider can help manage everything so you’re not overwhelmed.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-lg p-5 transition-all duration-300 ${
              openIndex === index ? "bg-orange-50 shadow-md" : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-orange-500 focus:outline-none"
            >
              <span>{item.question}</span>
              <span className="text-orange-500 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer section with animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-700 text-sm leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
