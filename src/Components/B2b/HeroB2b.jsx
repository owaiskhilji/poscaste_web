import blog from '../../assets/b2b/b2bimage.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function HeroBlog() {

const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: true, 
        });
    }, []);


    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[60vh] relative overflow-hidden">
                {/* Background Image with 60% screen height */}
                <img
                    src={blog}
                    alt="Background"
                    className="absolute inset-0 object-cover w-full h-[60vh] opacity-50"
                />

                {/* Heading Content */}
                <div data-aos="zomm-in" className="z-10  bg-black/60 w-full h-full flex flex-col items-center justify-center">
                    <h1
                        className="font-titillium font-bold text-[40px] leading-[40px] sm:text-[44px] sm:leading-[44px] md:text-[46px] md:leading-[46px] lg:text-[49px] lg:leading-[49px] text-center text-white"
                        data-aos="fade-up"
                    >
                     SEARCHING FOR THE BESTB2B PODCAST
                    </h1>
                    <h2
                        className="font-titillium  text-lg leading-lg sm:text-md sm:leading-md md:text-xl md:leading-xl lg:text-2xl lg:leading-2xl text-center text-white"
                        data-aos="fade-up"
                    >
                  PRODUCTION SPECIALISTS ?
                    </h2>
                </div>
            </div>

            <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-32 text-center">
  <h2 className="font-titillium text-3xl sm:text-4xl font-bold mb-4">
    We can help you grow your B2B Business with a B2B Podcast!
  </h2>
  <p className="font-inter text-lg mb-6 text-gray-300">
    From strategy to distribution, we manage everything for you.
  </p>
  <div className="flex justify-center gap-4 flex-wrap">
    <button className="bg-textcolor text-white px-6 py-3 rounded-lg hover:bg-white hover:text-textcolor transition">
      🎧 Book a Free Consultation
    </button>
    <button 
        onClick={() => navigate('/contact')}
    className="border border-textcolor text-textcolor px-6 py-3 rounded-lg hover:bg-textcolor hover:text-white transition">
      📬 Contact Us
    </button>
  </div>
</section>


        </div>
    );
}
