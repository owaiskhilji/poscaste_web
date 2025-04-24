import bgimage from '../../assets/blog/blog_slider.png';
import { Link } from "react-router-dom";


export default function CallNow() {
    return (
        <div 
        style={{backgroundImage: `url(${bgimage})`}}
        className="z-10w-full flex flex-col items-center justify-center h-[30vh] lg:h-[40vh] bg-center bg-cover bg-no-repeat bg-fixed">
            <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 mx-auto p-2 mt-6 mb-6 max-w-7xl  text-center pt-20 h-[30vh] lg:h-full bg-black/80 "     
            >
        <div className="flex flex-col gap-4 px-8 ">
          <h3 className="text-3xl font-titillium font-semibold text-white tracking-tighter">
          READY TO GROW YOUR
          </h3>
          <h2 className="text-4xl text-white font-titillium font-bold">
          BUSINESS WITH  <span className="text-textcolor">A PODCAST?</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p className="text-white mb-6 max-w-3xl text-lg font-inter font-bold">
          Running your business is a full time job, let us take care of producing, editing, distribution, micro-content creation, marketing and driving sales through your podcast. <Link to="/contact"> <span className="text-textcolor underline cursor-pointer text-md">Call Now</span> </Link>
          </p>
        </div>
        </div>
      
    </div>
 

);
}