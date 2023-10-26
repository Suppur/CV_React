import React, {useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import usePDFExport from './hooks/usePDFExport';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const exportToPDF = usePDFExport([homeRef, aboutRef, contactRef, experienceRef, portfolioRef]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto p-4 flex-grow" id="pdf-container">
          <Routes>
            <Route path="/about" element={<About forwardedRef={aboutRef}/>} />
            <Route path="/" element={<Home forwardedRef={homeRef}/>} />
            <Route path="/experience" element={<Experience forwardedRef={experienceRef}/>} />
            <Route path="/portfolio" element={<Portfolio forwardedRef={portfolioRef}/>} />
            <Route path="/contact" element={<Contact forwardedRef={contactRef}/>} />
          </Routes>
        </div>
        
        <div className="flex justify-center p-4">
          <button onClick={exportToPDF} className="bg-blue-500 text-white py-2 px-4 rounded">
            Export to PDF
          </button>
        </div>

        {/* Hidden Div */}
        <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
          <Home ref={homeRef} />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Portfolio ref={portfolioRef} />
          <Contact ref={contactRef} />
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;