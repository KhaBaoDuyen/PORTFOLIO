import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Credit from "./pages/Credit";

import MainLayout from "./layouts/MainLayout";
import PlainLayout from "./layouts/PlainLayout";
import LoadingWrapper from "./components/Loading";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PlainLayout />}>
          <Route  index element={<Landing />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/kha-thi-bao-duyen" element={<Home />} />
          <Route path="/ve-toi" element={<About />} />
          <Route path="/ky-nang" element={<div>Kỹ năng</div>} />
          <Route path="/du-an" element={<div>Dự án</div>} />
          <Route path="/chung-chi" element={<Credit/>} />
          <Route path="/lien-he" element={<div>Liên hệ</div>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
