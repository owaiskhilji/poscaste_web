export default function Footer() {
    return (
      <footer className="bg-textcolor text-white py-10">
        <div className="container mx-auto flex flex-col sm:flex-col md:flex-row sm:justify-center md:justify-around lg:justify-between items-center px-6 space-y-6 md:space-y-0">
          {/* Left Section - Restaurant Name & Type */}
          <div className="text-center md:text-left">
            <p className="font-bold text-xl md:text-xl lg:text-2xl">Al Noor ul Huda Institute International</p>
            <p className="text-sm md:text-md lg:text-lg italic">Online Institute</p>
            {/* <p className="text-xs lg:text-sm md:w-64 lg:w-full">Serving delicious meals since September 2016</p> */}
          </div>
  
          {/* Center Section - Navigation Links */}
          {/* <nav className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-center">
            <a href="/contact" className="link link-hover text-sm md:text-sm lg:text-lg">
              contact
            </a>
            <a href="/about" className="link link-hover text-sm md:text-sm lg:text-lg">
              About
            </a>
          </nav> */}
  
          {/* Right Section - Contact & Social Media */}
          <div className="text-center md:text-left">
            <div className="text-sm md:text-md lg:text-md space-y-3">
              <div className="flex items-center justify-center md:justify-start">
              <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 mr-2 fill-current text-white"
               viewBox="0 0 24 24"
             >
               <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
             </svg>
                <p>03XX-XXXXX</p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-12l10 8.107 10-8.107v12h-20z" />
                </svg>
                <p className="md:w-52 lg:w-full">XXXXX@gmail.com</p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                <p className="md:w-52 lg:w-full">Pakistan</p>
              </div>
            </div>
  

          </div>
        </div>
        {/* Copyright */}
        <p className="text-center text-sm mt-6  pt-6">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </footer>
    );
  }