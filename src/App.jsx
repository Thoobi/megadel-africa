import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
