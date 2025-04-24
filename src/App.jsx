import { useEffect} from "react";
import './App.css'
import {Routes,Route,useLocation } from "react-router-dom";
// import Home from "./Pages/Home"
 import Blog from "./Pages/Blog"
import B2b from "./Pages/B2b"
 import Contact from "./Pages/Contact"
// import Notfound from "./Pages/Notfound"
import Navbar from "./Components/Main/Navbar"
import Work from "./Pages/Work"


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


{/* <Route path="/" element={<Home/>} />  */}
<Route path="/work" element={<Work/>} />
<Route path="/blog" element={<Blog/>} />
<Route path="/b2b" element={<B2b/>} />
 <Route path="/contact" element={< Contact/>} /> 
 {/* <Route path="/*" element={< Notfound/>} />  */}
</Routes>
</div>
  )
}

export default App
