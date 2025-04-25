import React from 'react'
import Hero from "../Components/Home/Hero"
import Podcast from "../Components/Home/podcast"
import B2BPodcastIntro from "../Components/Home/B2BPodcastIntro"
import PodcastAgencyIntro from "../Components/Home/PodcastAgencyIntro"
import Results from "../Components/Home/Results"
import Features from "../Components/Home/FeaturesSection"
import Faq from "../Components/Home/Faq"
import CalltoAction from "../Components/Home/CalltoAction"

function Home() {
  return (

    <div className='overflow-y-hidden'>
      <>
        <Hero />
        <Podcast />
        <B2BPodcastIntro />
        <PodcastAgencyIntro />
        <Results />
        <Features />
        <Faq/>
        <CalltoAction/>
      </>
    </div>

  )
}

export default Home