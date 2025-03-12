import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { lazy } from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Calculator = lazy(() => import('./pages/Calculator'));

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <main className="flex-grow md:ml-64 p-6 pt-12">
          <Suspense fallback={<div className="text-center py-16 text-primary">Загрузка...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;