import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";

import MainLayout from "./layouts/MainLayout";
import PlainLayout from "./layouts/PlainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PlainLayout />}>
          <Route  index element={<Landing />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/khathibaoduyen" element={<Home />} />
          <Route path="/ve-toi" element={<About />} />
          <Route path="/ky-nang" element={<div>Kỹ năng</div>} />
          <Route path="/du-an" element={<div>Dự án</div>} />
          <Route path="/chung-chi" element={<div>Chứng chỉ</div>} />
          <Route path="/lien-he" element={<div>Liên hệ</div>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
