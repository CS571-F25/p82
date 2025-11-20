// src/components/Hobbies.jsx
import { Container, Row, Col } from "react-bootstrap";
import HobbyCard from "./HobbyCard";

const hobbies = [
  {
    title: "Skiing",
    emoji: "🎿",
    category: "Outdoors",
    description:
      "I love skiing in the winter and chasing better runs each season.",
    details: [
      "Enjoy both resort skiing and occasional trips out west",
      "Like the mix of speed, control, and being outside in the cold",
    ],
  },
  {
    title: "Collecting LEGO",
    emoji: "🧱",
    category: "Building",
    description:
      "I collect and build LEGO sets, especially ones that mix engineering and design.",
    details: [
      "Enjoy detailed car / architecture / sci-fi sets",
      "Helps me relax while still thinking about structure and systems",
    ],
  },
  {
    title: "Football",
    emoji: "🏈",
    category: "Sports",
    description:
      "I’m a big football fan and follow both college and professional games.",
    details: [
      "Love breaking down plays and strategies",
      "Football season is my favorite time of the year",
    ],
  },
  {
    title: "Tech & Side Projects",
    emoji: "💻",
    category: "Tech",
    description:
      "Outside of school, I like experimenting with small coding or hardware projects.",
    details: [
      "Try out new frameworks and tools for fun",
      "Build things that automate small parts of my life",
    ],
  },
];

export default function Hobbies() {
  return (
    <section className="app-page">
      <Container>
        <h1 className="mb-3">Hobbies</h1>
        <p className="text-muted mb-4">
          A few things I enjoy outside of classes and work that keep me balanced
          and motivated.
        </p>

        <Row className="g-4">
          {hobbies.map((hobby) => (
            <Col key={hobby.title} md={6}>
              <HobbyCard {...hobby} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
