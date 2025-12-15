import { BrowserRouter, Routes,Route, } from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Items from "./Pages/Items";
import Details from "./Pages/Details";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar";





function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<Details />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
    
}

export default App;
