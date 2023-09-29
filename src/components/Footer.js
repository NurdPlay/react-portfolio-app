import { Col, Row, Container } from "reactstrap";
import githubIcon from "../images/008-github.png";
import linkedinIcon from "../images/010-linkedin.png";

function Footer() {
  return (
    <div>
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
  )
}

export default Footer
