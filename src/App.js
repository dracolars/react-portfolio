import Home from "./components/Home";
import Eyemedtron from "./components/Eyemedtron";
import PageNotFound from "./components/PageNotFound";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
   <BrowserRouter>
    <ScrollToTop>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/eyemedtron" element={<Eyemedtron/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
  
  );
}

export default App;
