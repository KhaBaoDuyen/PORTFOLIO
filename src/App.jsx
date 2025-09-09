import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

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
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
