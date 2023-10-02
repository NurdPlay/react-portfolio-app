import linkedinIcon from "../images/010-linkedin.png";
import githubIcon from "../images/008-github.png";
import { Container, Row } from "reactstrap";

function Profesional() {
  return (
    <Container className="professional-container">
      <Row>
        <h3 className="professional-title">Professional Links</h3>
      </Row>

      <div className="professional-links">
        <a
          href="https://github.com/NurdPlay"
          target="_blank"
          rel="noopener noreferrer"
          className="pro-link"
        >
          <img src={githubIcon} alt="GitHub" className="social-icon-about" />
        </a>
        <a
          href="https://www.linkedin.com/in/john-elliott-0a13a31b1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="social-icon-about"
          />
        </a>
      </div>
    </Container>
  );
}

export default Profesional;
