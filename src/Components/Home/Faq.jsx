import React, { useState } from "react";

const faqData = [
  {
    question: "Is a B2B podcast something your business should be doing?",
    answer: "    Raising brand awareness is certainly high up the list of common motivators for businesses wishing to start a podcast. Podcasts can be listened to by anyone with a smartphone or tablet, and businesses who turn to podcasting find new audiences to engage that they might otherwise struggle to reach."  },
  {
    question: "How much should you spend on B2B podcast production services?",
    answer: "As with everything — you get what you pay for. If your business or organisation is in a highly competitive sector then you’ll have to become very inventive to be noticed. Content marketing can be cost-effective, particularly so with the audio format. If you intend to produce weekly podcast episodes along with supporting social media management and some YouTube / TikTok content, then a leading professional B2B podcast production service provider will charge somewhere in the region of £2000+ per month (GBP). "
  },
  {
    question: "Will I be able to keep producing enough content?",
    answer: "One common concern is that of content creation. When you first think of topics to cover, relevant people to interview etc, your list may be fairly limited. Fear not though, for as soon as you get going you’ll find that the topics you can cover are virtually limitless. Also, the more people you talk to, the more connections you make and the greater your reach of new interviewees. You can also choose to go into macro detail regarding niche aspects of your business / services. It’s all about creating valuable content that engages the audience and a good place to start here is to cover common questions / concerns that your customers have."
  },
  {
    question: "Will I have the technical ability to record and produce content?",
    answer: "Another frequently voiced concern is: do you need to be an IT wizard to produce high quality audio content? — In short, no you don’t! This is where professional B2B podcast production service providers really prove their worth as they’ll be able to recommend microphones, recording equipment, best practices, and how to use any relevant software. If you go for a comprehensive package then your podcast producer will be able to handle all the production for you, so all you’ll need to do is press the record before you start your next episode!"
  },
  {
    question: "Will I be able to handle the extra work associated with managing a podcast?",
    answer: "The good news here is that you get to define your workload. Podcast episodes can run anywhere between 24 to 240 minutes! They can be in a format that’s very structured, or they can be informal chats. Your chosen B2B podcast production service provider will be able to help with the management side of things, and can regularly check-in with you to make sure things are on-track.  ‘PodcastChoice’ offers a flexible range of specialist podcast production services that can be fully tailored to your needs. Head over to https://podcastchoice.com/ now to reach audiences you’ve never reached before and generate the buzz you’re looking for."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 py-3">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left flex justify-between items-center font-medium text-lg"
          >
            {item.question}
            <span className="text-xl">
              {openIndex === index ? "-" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-700">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
