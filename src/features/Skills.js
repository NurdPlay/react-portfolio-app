import { Container, Row, Col } from "reactstrap";
import skill1 from "../images/001-html.png";
import skill2 from "../images/002-css-3.png";
import skill3 from "../images/004-bootstrap.png";
import skill4 from "../images/003-java-script.png";
import skill5 from "../images/005-react.png";
import skill6 from "../images/006-database-storage.png";
import skill8 from "../images/003-ux.png";
import skill7 from "../images/git.png";
import skill9 from "../images/008-github.png";
import skill10 from "../images/005-c.png";

function Skills() {
  return (
    <div>
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
  );
}

export default Skills;
