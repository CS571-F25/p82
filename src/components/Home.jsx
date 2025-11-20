import { Container, Row, Col, Image, Button, Stack } from "react-bootstrap";
import headshot from "../assets/artur-headshot.png"; // your PNG

export default function Home() {
  return (
    <section className="app-page home-section">

      {/* HERO SECTION */}
      <Container className="text-center mb-5">
        <h1 className="home-title">Artur Sobol</h1>
        <p className="lead">
          Computer Science Student • UW–Madison
        </p>

        <Stack direction="horizontal" gap={3} className="justify-content-center mt-3">
          <Button href="#/projects">View Projects</Button>
          <Button variant="outline-secondary" href="#/resume">
            View Resume
          </Button>
        </Stack>
      </Container>

      {/* ABOUT ME SECTION */}
      <Container className="about-layout">
        <Row className="align-items-center g-4">
          {/* Photo */}
          <Col md={4} className="text-center">
            <Image
              src={headshot}
              alt="Artur Sobol"
              fluid
              className="about-photo"
            />
          </Col>

          {/* Divider */}
          <Col md="auto" className="d-none d-md-flex justify-content-center px-0">
            <div className="about-divider" />
          </Col>

          {/* Text */}
          <Col md={7}>
            <h2 className="about-section-title">About Me</h2>

            <p className="about-text">
              Hi, my name is Artur Sobol and I’m a junior student at the 
              University of Wisconsin–Madison. I’m currently pursuing a major in 
              Computer Science and possibly Computer Engineering.
            </p>

            <p className="about-text">
              I’m passionate about low-level computer architecture and how it can 
              be used with higher-level programs to maximize efficiency. Some of my 
              hobbies include skiing, collecting Legos, and football.
            </p>

            <p className="about-text">
              This website summarizes me as a person and outlines my academic 
              achievements and projects.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
