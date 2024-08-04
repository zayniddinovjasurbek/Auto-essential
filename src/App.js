import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from './component/header/Header'
import Footer from "./component/footer/Footer"; 
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Tools from "./pages/tools/Tools";
import Single from './pages/shop/SingleProduct/Single';
import My_accaunt_banner from './pages/myaccount/banner/My_accaunt_banner'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/single" element={<Single />} />
        <Route path="/my_accaunt_banner" element={<My_accaunt_banner />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
