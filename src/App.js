import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footers/Footer";
import Header from "./Components/Headers/Header";
import Layout from "./Components/Layouts/Layout";
import Legacy from "./Pages/Legacy";
import { useInView } from "react-intersection-observer";


import "./css/style.css";
import { useEffect, useState } from "react";


function App() {

 
  const { ref, inView, entry } = useInView({
    threshold: 0,
    trackVisibility: true,
    delay:3000,
  });


  const handleChange = (inView, entry) =>{
    console.log('InView ', inView);
    console.log('entry ', entry);
  }

  return (
    <div className="App">

      <div onChange={() => handleChange(inView, entry)} ref={ref}><p className="observer">{inView}</p></div>

      <BrowserRouter>

        <Header size={inView ? "regular" : "small"} />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/mentions-legales" element={<Legacy />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
