import { Link } from 'react-router-dom'



export default function Navbar() {

  
function openModal(){
  const modal = document.getElementById('my_modal_3')
  if (modal) {
    modal.showModal(); 
  } else {
    console.error("Modal not found!");
  }
}

  

  return (
      <div className="fixed z-10 border-b-4 border-[#1c7303] navbar px-8 bg-white/80 shadow-md h-[80px] sm:h-[80px] md:h-[80px] lg:h-[90px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm sm:menu-md md:menu-lg dropdown-content text-black hover:text-white bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="hover:bg-[#1A4D2E] ">
              <Link
              to="/"
              onClick={() => document.activeElement.blur()}
              >Home</Link>
            </li>
            <li className="hover:bg-[#1A4D2E] ">
               <Link
              to="/allcourses"
              onClick={() => document.activeElement.blur()}
              >All Courses</Link>
            </li>
            
            <li className="hover:bg-[#1A4D2E] ">
                <Link
              to="/about"
              onClick={() => document.activeElement.blur()}
              >About us</Link>
            </li>
            <li className="hover:bg-[#1A4D2E] ">
               <Link
              to="/contact"
              onClick={() => document.activeElement.blur()}
              >Contact us</Link>
            </li>

            </ul>
          </div>
          <a className="text-[#1c7303] font-bold font-merriweather text-lg sm:text-2xl md:text-3xl lg:text-4xl">LOGO</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu-horizontal px-1 lg:gap-x-8">
          <li className=" rounded-lg lg:text-xl border-none font-semibold text-[#1c7303] hover:text-[#30b50b] hover:underline"
              >
              <Link
              to="/"
              >Home</Link>
            </li>          
                
            <li className=" rounded-lg lg:text-xl border-none font-semibold text-[#1c7303] hover:text-[#30b50b] hover:underline"
              >
              <Link
              to="/allcourses"
              >All Courses</Link>
            </li>          
            
            <li className=" rounded-lg lg:text-xl border-none font-semibold text-[#1c7303] hover:text-[#30b50b] hover:underline"
              >
              <Link
              to="/about"
              >About us</Link>
            </li>          
            <li className=" rounded-lg lg:text-xl border-none font-semibold text-[#1c7303] hover:text-[#30b50b] hover:underline"
              >
              <Link
              to="/contact"
              >Contact us</Link>
            </li>          

          
          </ul>
        </div>
        <div className="navbar-end">
          <h2 className="text-[#1c7303] font-bold text-sm sm:text-lg md:text-xl lg:text-3xl">03XXXXX</h2>
        </div>
      </div>
    );
  }
  