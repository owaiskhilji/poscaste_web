import { useEffect} from "react";
import './App.css'
import {Routes,Route,useLocation } from "react-router-dom";
// import Home from "./Pages/Home"
// import Notfound from "./Pages/Notfound"
import Navbar from "./Components/Main/Navbar"
import Footer from "./Components/Main/Footer"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}




function App() {
  
  return (
<div className="overflow-x-hidden">
<Navbar />
    <ScrollToTop/>
<Routes>

{/* <Route path="/" element={<Home/>} /> */}
{/* <Route path="/about" element={< Aboutus/>} />
<Route path="/allcourses" element={< Allcourses/>} />
<Route path="/contact" element={< Contact/>} /> */}
{/* <Route path="/*" element={< Notfound/>} /> */}
</Routes>
{/* <Footer/> */}
</div>
  )
}

export default App
