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
import { Col, Container, Row } from "reactstrap";
import { useSpring, animated } from "react-spring";
import ContactForm from "./components/ContactForm"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyLogo from "./images/logo.png";

import githubIcon from "./images/008-github.png";
import linkedinIcon from "./images/010-linkedin.png";
import ScrollToTop from "./utils/ScrollToTop";
import About from "./features/About";
import Profesional from "./components/Profesional";
import Skills from "./features/Skills";
import Education from "./features/Education";


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

        {/* Profesional */}
        <animated.div className="profesional">
          <Profesional />
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
        <footer className="site-footer">
          <Container>
            <Row>
              <Col xs="6" sm="3" className="text-center">
                <h5>Social</h5>
                <a
                  className="btn btn-social-icon btn-instagram social-icon"
                  href="http://instagram.com/"
                >
                  <i className="fa fa-instagram" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-facebook social-icon"
                  href="http://www.facebook.com/"
                >
                  <i className="fa fa-facebook" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-twitter social-icon"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter" />
                </a>{" "}
              </Col>
              <Col>
                <a href="https://github.com/NurdPlay">
                  <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/john-elliott-0a13a31b1/">
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="social-icon"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
