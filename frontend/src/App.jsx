import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Easy from './pages/Easy';
import Medium from './pages/Medium';
import Hard from './pages/Hard';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="p-4 space-y-4">
        <Link to="/easy" className="block">Easy</Link>
        <Link to="/medium" className="block">Medium</Link>
        <Link to="/hard" className="block">Hard</Link>
      </div>
      <Routes>
        <Route path="/easy" element={<Easy />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
      </Routes>
    </Router>
  );
}

export default App;
