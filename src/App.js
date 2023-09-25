import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import Link for navigation
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Col, Container, Row, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyLogo from './images/logo.png';
import skill1 from './images/001-html.png';
import skill2 from './images/002-css-3.png';
import skill3 from './images/004-bootstrap.png';
import skill4 from './images/003-java-script.png';
import skill5 from './images/005-react.png';
import skill6 from './images/006-database-storage.png';
import skill8 from './images/003-ux.png';
import skill7 from './images/git.png';
import skill9 from './images/008-github.png';
import DevIcon from './images/001-coding.png';
import skill10 from './images/005-c.png';
import Nucamp from "./images/NucampLogo.png";
import IULogo from "./images/IULogo.png";
import EducationImg from './images/education.png'
import githubIcon from './images/008-github.png'
import linkedinIcon from './images/010-linkedin.png'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const about = useRef(null);
  const skills = useRef(null);
  const education = useRef(null);

  const scrollTOSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
    <div className='App'>
    <ScrollToTop />
      <div className="header-section">
        <Navbar className="navbar navbar-expand-md navbar-dark bg-dark" sticky="top">
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
                  <Link to="/about" className="nav-link" onClick={() => scrollTOSection(about)}>
                    <i className="fa fa-user fa-lg" /> About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/skills" className="nav-link" onClick={() => scrollTOSection(skills)}>
                    <i className="fa fa-cogs fa-lg" /> Skills
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/education" className="nav-link" onClick={() => scrollTOSection(education)}>
                    <i className="fa fa-graduation-cap fa-lg" /> Education
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact" className="nav-link">
                    <i className="fa fa-envelope fa-lg" /> Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>

      <div ref={about} className="about-section">
        <Container className="AboutCardContainer">
          <Row className="justify-content-center">
            <Col sm="6" className="mx-auto">
              <Card className="about-card">
                <CardHeader className="bg-dark text-white">
                  <h1 className="about-title">John Elliott</h1>
                </CardHeader>
                <CardBody className="about-body">
                  <Row className="justify-content-center mb-3">
                    <img src={DevIcon} alt="Developer Icon" className="dev-icon" />
                  </Row>
                  <Row className="justify-content-center">
                    <h3 className="about-subtitle">Fullstack Developer</h3>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div ref={skills} className="skills-section">
        <Container className="container skill-container">
          <Row>
            <Col>
              <img src={skill1} alt="Html5-icon" />
              <img src={skill2} alt="Html5-icon" />
              <img src={skill3} alt="Html5-icon" />
              <img src={skill4} alt="Html5-icon" />
              <img src={skill5} alt="Html5-icon" />
            </Col>
            <Col>
              <h3>Skills</h3>
            </Col>
            <Col>
              <img src={skill6} alt="Html5-icon" />
              <img src={skill7} alt="Html5-icon" />
              <img src={skill8} alt="Html5-icon" />
              <img src={skill9} alt="Html5-icon" />
              <img src={skill10} alt="Html5-icon" />
            </Col>
          </Row>
        </Container>
      </div>

      <div ref={education} className="education-section">
        <Container className="Container">
          <Row>
            <Col>
              <h3 className="education-title">Education</h3>
              <img className='education-icon' src={EducationImg} alt="Education" />
            </Col>
         
            
          </Row>

          <Row>
            <Col sm="6">
              <Card className="education-card">
                <img className="education-image" src={Nucamp} alt="Nucamp Logo" />
                <CardBody>
                  <CardTitle tag="h5" className="card-title-black">Nucamp Developer Bootcamp</CardTitle>
                  <CardText className="card-text-black">
                    A comprehensive bootcamp covering web development technologies.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="education-card">
                <img className="education-image" src={IULogo} alt="IU Logo" />
                <CardBody>
                  <CardTitle tag="h5" className="card-title-black">Independence University: Computer Science</CardTitle>
                  <CardText className="card-text-black">
                    Pursued a degree in Computer Science with a focus on software development.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="site-footer">
        <Container>
          <Row>
            <Col xs="6" sm="3" className="text-center">
              <h5>Social</h5>
              <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                <i className="fa fa-instagram" />
              </a>{' '}
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">
                <i className="fa fa-facebook" />
              </a>{' '}
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                <i className="fa fa-twitter" />
              </a>{' '}
            </Col>
            <Col>
              <a href='https://github.com/NurdPlay'>
                <img src={githubIcon} alt="GitHub" className="social-icon" />
              </a>
              <a href='https://www.linkedin.com/in/john-elliott-0a13a31b1/'>
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
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