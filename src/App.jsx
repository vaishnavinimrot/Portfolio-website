import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./Home";
import "./App.css"; // Import styles for snap scrolling

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="sections">
        <section><Hero /></section>
        <section><About /></section>
        <section><Skills /></section>
        <section><Projects /></section>
        <section><Contact /></section>
        <section><Footer /></section>
        <section><Home /></section>
      </div>
    </div>
  );
}

export default App;
