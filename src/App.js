import React, { useRef, useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { useSpring, animated } from "react-spring";
import ContactForm from "./components/ContactForm"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyLogo from "./images/logo.png";

import ScrollToTop from "./utils/ScrollToTop";
import About from "./features/About";
import Professional from "./components/Professional";
import Skills from "./features/Skills";
import Education from "./features/Education";
import Footer from "./components/Footer";


function App() {
  const about = useRef(null);
  const skills = useRef(null);
  const education = useRef(null);
  const contact = useRef(null);

  const scrollTOSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const skillsAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const educationAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  useEffect(() => {
  
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <div className="header-section">
          <Navbar
            className="navbar navbar-expand-md navbar-dark bg-dark"
            sticky="top"
          >
            <div className="container">
              <NavbarBrand href="/">
                <img src={MyLogo} alt="my logo" className="navbar-brand-img" />
              </NavbarBrand>
              <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
              <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                  <NavItem>
                    <Link to="/" className="nav-link">
                      <i className="fa fa-home fa-lg" /> Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/about"
                      className="nav-link"
                      onClick={() => scrollTOSection(about)}
                    >
                      <i className="fa fa-user fa-lg" /> About
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/skills"
                      className="nav-link"
                      onClick={() => scrollTOSection(skills)}
                    >
                      <i className="fa fa-cogs fa-lg" /> Skills
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/education"
                      className="nav-link"
                      onClick={() => scrollTOSection(education)}
                    >
                      <i className="fa fa-graduation-cap fa-lg" /> Education
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link 
                      to="/contact"
                      className="nav-link"
                      onClick={() => scrollTOSection(contact)}  
                    >
                      <i className="fa fa-envelope fa-lg" /> Contact
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>

        {/* Animated about section */}
        <animated.div style={aboutAnimation} ref={about} className="about-section">
          <About />
        </animated.div>

        {/* Professional */}
        <animated.div className="professional">
          <Professional />
        </animated.div>

        {/* Skills Section */}
        <animated.div style={skillsAnimation} ref={skills} className="skills-section">
          <Skills />
        </animated.div>

        {/* Education Section */}
        <animated.div style={educationAnimation} ref={education} className="education-section">
          <Education />
        </animated.div>
        
        {/* Contact */}

        <animated.div style={aboutAnimation} ref={contact} className="contact-section">
            <ContactForm />
        </animated.div>

        {/* Footer */}
          <Footer />

              </div>
    </Router>
  );
}

export default App;
