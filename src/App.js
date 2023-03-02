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
import GoogleAnalytics from "./components/GoogleAnalytics";
import MetlSpan from "./components/MetlSpan";

function App() {
  return (
   <BrowserRouter>
    <ScrollToTop>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/work/eyemedtron" element={<Eyemedtron/>} />
        <Route path="/work/googleanalytics" element={<GoogleAnalytics/>} />
        <Route path="/work/metlspan-reps" element={<MetlSpan/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
  
  );
}

export default App;
