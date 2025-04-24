import contact from '../../assets/contact/contactimage1.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HeroBlog() {

    // Initialize AOS (Animate On Scroll) library
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);


    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[60vh] relative overflow-hidden">
                {/* Background Image with 60% screen height */}
                <img
                    src={contact}
                    alt="Background"
                    className="absolute inset-0 object-cover w-full h-[60vh] opacity-50"
                />

                {/* Heading Content */}
                <div data-aos="zomm-in" className="z-0  bg-black/40 w-full h-full flex flex-col items-center justify-center">
                    <h1
                        className="font-titillium font-bold text-[40px] leading-[40px] sm:text-[44px] sm:leading-[44px] md:text-[46px] md:leading-[46px] lg:text-[49px] lg:leading-[49px] text-center text-white"
                        data-aos="fade-up"
                    >
                     Contact Us
                    </h1>
                    <h2
                        className="font-titillium  text-lg leading-lg sm:text-md sm:leading-md md:text-xl md:leading-xl lg:text-2xl lg:leading-2xl text-center text-textcolor"
                        data-aos="fade-up"
                    >
                    SPEAK TO A PODCAST SPECIALIST
                    </h2>
                </div>
            </div>
        </div>
    );
}
