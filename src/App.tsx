import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Extension from './pages/Extension';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Partnership from './pages/Partnership';
import Impact from './pages/Impact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/extension" element={<Extension />} />
            <Route path="/community" element={<Community />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;