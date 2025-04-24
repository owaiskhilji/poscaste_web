import blog from '../../assets/blog/blog_slider.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HeroBlog() {

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
                     Podcast Blog Services
                    </h1>
                    <h2
                        className="font-titillium  text-lg leading-lg sm:text-md sm:leading-md md:text-xl md:leading-xl lg:text-2xl lg:leading-2xl text-center text-white"
                        data-aos="fade-up"
                    >
                    Podcast services to boost your brand!
                    </h2>
                </div>
            </div>
        </div>
    );
}
