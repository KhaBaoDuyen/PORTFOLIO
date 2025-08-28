import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;
