import map from '../../assets/contact/map2.png';


export default function Form() {
return(

    <>
      <section className="px-8 py-8 lg:py-16 mt-12 overflow-y-hidden" >
          <div className="max-w-6xl mx-auto text-center">
           
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start">
              <div data-aos="zoom-in" className="w-full h-full">
              <h1 className="font-titillium font-bold text-[40px] leading-[40px] sm:text-[44px] sm:leading-[44px] md:text-[46px] md:leading-[46px] lg:text-[49px] lg:leading-[49px] text-center text-black">
              Message us, we would love to hear from you!
              </h1>
              <p className="font-titillium text-lg leading-lg sm:text-md sm:leading-md md:text-xl md:leading-xl lg:text-2xl lg:leading-2xl text-center text-textcolor mt-6">
              So, isn’t it time you approached the best podcast company to help you create the best podcast possible!?
              </p>
              </div>
              <div 
              data-aos="fade-up"
     data-aos-duration="600"
              className="border-4 outline-none border-b-textcolor rounded-lg p-6 lg:p-10 bg-white shadow-2xl flex justify-center">
              <form className="flex flex-col gap-4 lg:max-w-sm text-left">
                            <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-titillium text-gray-900 ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="First Name"
                      className="w-full bg-gray-100 text-black p-3 rounded-2xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-900 "
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-titillium text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Last Name"
                      className="w-full bg-gray-100 text-black p-3 rounded-2xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-900 "
                   
                   />
                  </div>
                </div>
    
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-titillium text-gray-900">
                      Slect a Plan
                    </label>
               
                    <details className="dropdown w-full">
      <summary className="w-full bg-gray-100 text-black p-3 rounded-2xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-900">Starter Plan </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-64 p-2 shadow-sm">
        <li><a >Starter Plan (£500/month)</a></li>
        <li><a >Comperhensive Plan (£1000/month)</a></li>
        <li><a >Full services Plan (£2000/month)</a></li>
      </ul>
    </details>
               
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-titillium text-gray-900">
                      Number
                    </label>
                    <input
                      type="text"
                      name="Number"
                      placeholder="Last Name"
                      className="w-full bg-gray-100 text-black p-3 rounded-2xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-900 "
                   
                   />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                  How can we help? Tell us a bit about your project.
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Message"
                    className="w-full bg-gray-100 text-black p-3 rounded-4xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-900 "
                    ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-textcolor hover:bg-white hover:border-2 hover:border-textcolor hover:text-black text-white py-3 rounded "
                >
                  Send message
                </button>
              </form>
            </div>
            </div>
          </div>
        </section>
      
    </>
)

}