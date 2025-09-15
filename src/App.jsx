import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Credit from "./pages/Credit";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

import MainLayout from "./layouts/MainLayout";
import PlainLayout from "./layouts/PlainLayout";
import LoadingWrapper from "./components/Loading";
import {ScrollToTop} from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<PlainLayout />}>
          <Route  index element={<Landing />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/kha-thi-bao-duyen" element={<Home />} />
          <Route path="/ve-toi" element={<About />} />
          <Route path="/ky-nang" element={<Skills/>} />
          <Route path="/du-an" element={<Project/>} />
          <Route path="/chung-chi" element={<Credit/>} />
          <Route path="/lien-he" element={<Contact/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
