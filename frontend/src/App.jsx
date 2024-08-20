import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Easy from './pages/Easy';
import Medium from './pages/Medium';
import Hard from './pages/Hard';

function App() {
  return (
    <Router>
      <div className="p-4 flex gap-8">
        <NavLink to="/easy" className={({ isActive }) => (isActive ? 'text-[#008bc2] text-[18px]' : 'text-[18px]')}>Easy</NavLink>
        <NavLink to="/medium" className={({ isActive }) => (isActive ? 'text-[#008bc2] text-[18px]' : 'text-[18px]')}>Medium</NavLink>
        <NavLink to="/hard" className={({ isActive }) => (isActive ? 'text-[#008bc2] text-[18px]' : 'text-[18px]')}>Hard</NavLink>
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
