import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import GetStarted from "./pages/GetStarted";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}
