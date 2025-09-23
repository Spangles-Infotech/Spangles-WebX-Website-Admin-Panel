import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact";
// import { Featuredwork } from "./components/Featured/Featuredwork";
import Career from "./components/Career/Career";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./ScrollToHash";
import Footer from "./components/Footer";


export const URL = process.env.REACT_APP_BACKEND_API_URL;
// Home sections grouped
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  );
}

function App() {
  return (
    <>
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested routes inside layout */}
        <Route index element={<Home />} />
        <Route path="/career" element={<Career />} />
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
