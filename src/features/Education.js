import Nucamp from "../images/NucampLogo.png";
import IULogo from "../images/IULogo.png";
import EducationImg from "../images/education.png";
import { Row, Col, Container, Card, CardBody, CardTitle, CardText } from "reactstrap";


function Education() {
  return (
    <div>
                <Container className="Container education-container">
            <Row>
              <Col>
                <h3 className="education-title">Education</h3>
                <img
                  className="education-icon"
                  src={EducationImg}
                  alt="Education"
                />
              </Col>
            </Row>

            <Row>
              <Col sm="6">
                <Card className="education-card">
                  <img
                    className="education-image"
                    src={Nucamp}
                    alt="Nucamp Logo"
                  />
                  <CardBody>
                    <CardTitle tag="h5" className="card-title-black">
                      Nucamp Developer Bootcamp
                    </CardTitle>
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
                    <CardTitle tag="h5" className="card-title-black">
                      Independence University: Computer Science
                    </CardTitle>
                    <CardText className="card-text-black">
                      Pursued a degree in Computer Science with a focus on software development.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

    </div>
  )
}

export default Education
