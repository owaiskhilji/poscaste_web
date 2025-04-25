import LogoImage from "../../assets/home/logo.png";
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-3">
            <span className="text-orange-500 color-white text-3xl"><img src={LogoImage} alt="Voisce Logo" className="w-30 h-30 filter invert"  /></span>
          </div>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Web Choice UK Ltd
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "About Us", "Pricing", "Services", "B2B Podcast", "Blog", "Contact Us"].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-white transition duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Office Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">General Office</h2>
          <p className="text-sm text-gray-300">
            Henleaze House Business Centre,<br />
            13 Harbury Road, Henleaze<br />
            Bristol, BS9 4PN
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">Office Hours</h2>
          <p className="text-sm text-gray-300">
            Mon–Fri : 09am–07pm <br />
            Sat–Sun : Closed
          </p>
        </div>

        {/* Contact and Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>
          <p className="text-sm text-gray-300 mb-4">info@podcastchoice.com</p>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fas fa-cloud"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Voisce, All rights reserved.</p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <button className="bg-orange-500 hover:bg-orange-600 transition p-2 rounded-full">
            <i className="fas fa-arrow-up text-white"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
