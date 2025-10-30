<<<<<<< HEAD
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Recipie from './pages/Recipie';
=======
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Recipie from "./pages/Recipie";
>>>>>>> e6429f2a7eb0c4a7ec9f78a1d3502bdc9f984ca2

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     <Navbar />
     
     <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/recipie/:id" element={<Recipie />} />
     </Routes>

     <Footer />
=======
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/recipie/:id" element={<Recipie />} />
      </Routes>

      <Footer />
>>>>>>> e6429f2a7eb0c4a7ec9f78a1d3502bdc9f984ca2
    </div>
  );
}

export default App;
