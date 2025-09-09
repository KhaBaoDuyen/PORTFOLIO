import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import CustomCursor from './components/CustomCursor';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/khathibaoduyen" element={<Home />} />

        </Routes>
        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;
