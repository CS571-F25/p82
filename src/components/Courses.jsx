import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCard";

const courses = [
  {
    code: "CS 354",
    title: "Machine Organization and Programming",
    term: "Spring 2025",
    school: "UW–Madison",
    area: "Systems",
    description: "Low-level programming and how software maps onto hardware.",
    highlights: [
      "Implemented a custom dynamic memory allocator in C",
      "Built and debugged cache simulators and assembly routines",
    ],
  },
  {
    code: "CS 407",
    title: "Foundations of Mobile Systems and Applications",
    term: "Spring 2025",
    school: "UW–Madison",
    area: "Mobile",
    description: "Android app development with Kotlin and Jetpack Compose.",
    highlights: [
      "Created a note-taking app with scheduled reminders",
      "Used MVVM patterns and Room for local data storage",
    ],
  },
  {
    code: "ECE 352",
    title: "Digital System Fundamentals",
    term: "Fall 2024",
    school: "UW–Madison",
    area: "Hardware",
    description: "Designing and simulating digital circuits on FPGAs.",
    highlights: [
      "Designed finite-state machines, ALUs, and pipelines in Verilog",
      "Used ModelSim/QuestaSim and Quartus for simulation and synthesis",
    ],
  },
  {
    code: "CS 571",
    title: "Building User Interfaces",
    term: "Fall 2025",
    school: "UW–Madison",
    area: "Web/UI",
    description: "Modern web and mobile UI design with React and React Native.",
    highlights: [
      "Built multi-page React and React Native apps with routing",
      "Used design systems and accessibility-focused UI patterns",
    ],
  },
];

export default function Courses() {
  return (
    <section className="app-page">
      <Container>
        <h1 className="mb-3">Courses</h1>
        <p className="text-muted mb-4">
          A selection of classes that shaped how I think about systems,
          hardware, mobile, and web development.
        </p>

        <Row className="g-4">
          {courses.map((course) => (
            <Col key={course.code} md={6}>
              <CourseCard {...course} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
