import { Card } from "react-bootstrap";

export default function ProjectCard({ title, timeframe, description, tech }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="mb-1">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {timeframe}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        {tech && (
          <Card.Text className="mb-0">
            <strong>Tech:</strong> {tech}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}
