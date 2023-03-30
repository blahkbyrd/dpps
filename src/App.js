import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footers/Footer";
import Header from "./Components/Headers/Header";
import Home from "./Pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
