import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />

          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="bg-gray-900 text-white py-6 text-center mt-auto">
            <p className="text-sm">
              © 2025 ARM Technologies. All rights reserved.
            </p>
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
