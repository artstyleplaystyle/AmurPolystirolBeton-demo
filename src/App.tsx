import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { motion } from "framer-motion";

const App: React.FC = () => (
  <motion.h1
  className="text-1xl font-semibold tracking-tight"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 2, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <Router>
    <div className="flex flex-col min-h-screen right">
      <Header />
      <main className="flex-shrink">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
</motion.h1>
);

export default App;