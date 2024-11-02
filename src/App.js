import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
