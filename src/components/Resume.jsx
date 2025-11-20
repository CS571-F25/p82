import { Container, Row, Col, Card } from "react-bootstrap";

export default function Resume() {
  return (
    <section className="app-page">
      <Container>
        <h1 className="mb-4">Resume</h1>

        <Row className="gy-3">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text className="mb-1">
                  <strong>University of Wisconsin–Madison</strong>
                </Card.Text>
                <Card.Text className="mb-1">B.S. Computer Science</Card.Text>
                <Card.Text className="text-muted mb-0">
                  Expected Graduation: 2026
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Experience</Card.Title>
                <ul className="mb-0">
                  <li>Course projects in web, Android, and systems programming</li>
                  <li>Team-based software development in CS/ECE courses</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <Card.Text className="mb-1">
                  <strong>Languages:</strong> Java, Kotlin, C, JavaScript, Python
                </Card.Text>
                <Card.Text className="mb-1">
                  <strong>Frameworks:</strong> React, React Native, Compose
                </Card.Text>
                <Card.Text className="mb-0">
                  <strong>Interests:</strong> systems, hardware, mobile, web
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
