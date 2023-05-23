import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footers/Footer";
import Header from "./Components/Headers/Header";
import Layout from "./Components/Layouts/Layout";
import Legacy from "./Pages/Legacy";

import "./css/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Header />
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
