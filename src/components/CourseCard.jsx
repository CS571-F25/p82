import { Card, Badge } from "react-bootstrap";

export default function CourseCard({
  code,
  title,
  term,
  school,
  description,
  highlights = [],
  area,
}) {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-baseline mb-1">
          <Card.Title className="mb-0">
            {code}: {title}
          </Card.Title>
          {area && (
            <Badge bg="secondary" pill>
              {area}
            </Badge>
          )}
        </div>

        <Card.Subtitle className="mb-2 text-muted">
          {term} · {school}
        </Card.Subtitle>

        {description && <Card.Text className="mb-2">{description}</Card.Text>}

        {highlights.length > 0 && (
          <ul className="mb-0">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
}
