import { Container, Col, Row, CardBody, Card, CardHeader} from "reactstrap";
import DevIcon from '../images/developer.png';
function About() {
  return (
    <div>
                <Container className="AboutCardContainer">
            <Row className="justify-content-center">
              <Col sm="6" className="mx-auto">
                <Card className="about-card">
                  <CardHeader className="bg-dark text-white">
                    <h1 className="about-title">John Elliott</h1>
                  </CardHeader>
                  <CardBody className="about-body">
                    <Row className="justify-content-center mb-3">
                      <img
                        src={DevIcon}
                        alt="Developer Icon"
                        className="dev-icon"
                      />
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
  )
}

export default About
