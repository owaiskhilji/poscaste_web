import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function How() {
  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust this
      once: true,     // Animation should happen only once
    });
  }, []);


  const toggleDetail = (index) => {
    if (showDetails.includes(index)) {
      setShowDetails(showDetails.filter((i) => i !== index));
    } else {
      setShowDetails([...showDetails, index]);
    }
  };



const data = [
    {
      "title": "Pick a plan & book a discovery call",
      "description": "Once you’ve selected the most appropriate plan from our available options and have scheduled a call with us, we will:",
      "details": [
        "Have a deep, in-depth discussion with you to establish how you want to start the podcast.",
        "We can provide insightful suggestions for concepts and ideas.",
        "We will conduct extensive research on appropriate strategies and campaigns that you could employ to ensure your podcast is as successful as it can be."
      ]
    },
    {
      "title": "Project kick off call",
      "description": "One of the podcast production roles we can undertake for you is to oversee the content planning of your episodes, helping to pitch fresh ideas for your shows.",
      "details": [
        "We discuss podcast branding, choosing a strategy for the style and tone of your podcast. Our production staff are armed with extensive podcast knowledge and experience, across many different genres. We’ll work closely with you at every step of the way, making sure everything works for you.",
        "We can provide voice overs, promo material, along with sound and music options, plus we'll help you get set-up on our communication platform."
      ]
    },
    {
      "title": "Production",
      "description": "Once you send us your raw files, the content of which may be educational or entertaining, - We then edit and produce your audio and video (if applicable). We can help with all aspects of audio production - including the recording, editing, and publication of each episode.",
      "details": [
        "We create episode artwork and micro content (as per your plan) This may include: audio clips / video promos / sliders / PDFs / Blogs, etc, to help promote your show. We also create episode specific artwork for you too, to use on social media to help promote your brand.",
        "We'll produce a pre-agreed quantity of content per month (typically once weekly, though this may be more). This includes managing the podcast, recording and editing the episodes, providing artwork / branding, and uploading to podcast platforms and YouTube (if you require video)."
      ]
    },
    
  ]
  



  return (
    <div className="
    mt-20 w-full"
    data-aos="fade-left"
     
    >
        {
            data.map((item, index) => (
<section
 key={index} className="w-full px-4 py-10 max-w-5xl mx-auto text-left">
        <div className="mb-4">
          <h2 className="text-5xl text-textcolor font-titillium font-bold">
            {item.title}
          </h2>
        </div>

        <div className="w-1/2 mb-6">
          <hr className="border-2 border-gray-700" />
        </div>

        <p className="text-gray-600 mb-6 max-w-3xl text-lg font-inter font-bold" >
        {item.description}
        </p>

        {!showDetails.includes(index) ? (
          <button
            onClick={() => toggleDetail(index)}
            className="text-textcolor hover:underline font-medium"
          >
            See all
          </button>
        ) : (
          <>
            <div className="mt-6 font-inter space-y-4 text-gray-700 max-w-3xl">
              <ol>
                {item.details.map((detail, index) => (
            
                <li key={index} className=" list-inside">✅ {detail}</li>
                ))}
              </ol>
            </div>
            <button
              onClick={() => toggleDetail(index)}
              className="text-textcolor hover:underline font-medium mt-4"
            >
              See less
            </button>
          </>
        )}


      </section>

            )
        )}
      
      <section className="w-full px-4 py-10 max-w-5xl mx-auto text-left">
<div className="mb-4">
<h2 className="text-5xl text-textcolor font-titillium font-bold">
  MONTHLY MEETINGS
</h2>
</div>

<div className="w-1/2 mb-6">
<hr className="border-2 border-gray-700" />
</div>

<p className="text-gray-600 mb-6 max-w-3xl text-lg font-inter font-bold" >
We can set up monthly calls to track progress made and the data analysis for the month, which will then be used to plan for the month ahead.</p>

      </section> 




    </div>
  );
}



