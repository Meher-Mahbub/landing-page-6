import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <div className="container">
            <div className="top-section">
              <Header />
              <Hero />
            </div>

            <Routes>{/* future elems */}</Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
