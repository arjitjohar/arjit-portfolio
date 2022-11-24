import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Github from "../pages/Github";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center  text-white relative shadow-sm font-mono">
      <Router>
        <div>
          <nav>
            <span className="p-4">
              <Link to="/">Home</Link>
            </span>
            <span className="p-4">
              <Link to="/About">About</Link>
            </span>
            <span className="p-4">
              <Link to="/Projects">Projects</Link>
            </span>
            <span className="p-4">
              <Link to="/Contact">Contact</Link>
            </span>
            <span className="p-4">
              <Link to="/Github">Github</Link>
            </span>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="Github" element={<Github />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
