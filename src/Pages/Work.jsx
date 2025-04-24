import React from "react";  
import HeroWork from "../Components/Work/HeroWork";
import How from "../Components/Work/How";
import CallNow from "../Components/Work/CallNow";
export default function Work(){
    return(

        <div>
            <div>
            <HeroWork/>
            </div>

            <div data-aos="zoom-in-up" className="mt-14 flex flex-col mx-auto w-96 sm:w-[600px] md:w-[700px] lg:w-[1300px] items-center justify-center h-[50vh] lg:h-[30vh] relative overflow-hidden  rounded-lg bg-textcolor/90 shadow-lg shadow-black/50">
            <h1 className=" font-titillium w-full p-6 text-md sm:text-lg  lg:text-2xl text-center text-white mt-10 mb-10">
            Today, if you run a business, if you’re an artist, or if indeed you just have a story you want to tell, you’ll be aware of the power of podcasting. Perhaps you’ve already made some key decisions as to what your goals are, but you just need a bit of help getting started with how to create a podcast...</h1>
        
        </div>

<How/>
<CallNow/>

<br/>           
 <br/>           
 <br/>           
 <br/>           
      
        </div>
    )
}