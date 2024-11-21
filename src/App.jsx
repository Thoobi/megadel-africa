import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
