import bgimage from '../../assets/b2b/b2bimage.png';
import { Link } from "react-router-dom";


export default function Text() {
    return (
        <div 
        style={{backgroundImage: `url(${bgimage})`}}
        className="z-10w-full flex flex-col items-center justify-center min-h-screen lg:h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed py-5">
          
      <div 
      data-aos="fade-right"
      className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center mb-6 ">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-titillium font-bold text-orange-500">
        START YOUR NEW B2B PODCAST WITH HELP FROM THE BEST B2B PODCAST PRODUCTION COMPANY!
        </h1>
      </div>
      <div 
      data-aos="zoom-in-left"
      className="font-inter text-white mb-6 max-w-3xl text-center">
      <h2 className="text-sm md:text-md md:text-lg lg:text-2xl px-2 sm:px-6 text-white mb-4">
        If you are considering becoming a B2B Podcaster but aren’t sure where to begin, we can offer in-depth consultation to formulate a unique strategy that will ensure your B2B Podcast is a genuine success.</h2>
      </div>
       <div 
       data-aos="zoom-in-right"
       className="font-inter text-white mb-6 max-w-3xl text-center">
        <h2 className="text-sm lg:text-lg px-2 text-white mb-4">
        Starting a new B2B podcast isn’t all about hard work though: creating high-value content and engaging with your target audience is an incredibly fun and rewarding creative endeavour. Trust us, you’ll wish you started recording long before now!</h2>
      </div>
      
      
    </div>
 

);
}