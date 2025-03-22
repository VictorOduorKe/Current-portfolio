import React from "react";
import Navbar from "./Navbar";
import "./../css/Home.css";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
