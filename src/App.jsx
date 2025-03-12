import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Knowledge from './pages/Knowledge';
import Applications from './pages/Applications';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/knowledge" element={<Knowledge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;