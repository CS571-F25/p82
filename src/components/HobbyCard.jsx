// src/components/HobbyCard.jsx
import { Card, Badge } from "react-bootstrap";

export default function HobbyCard({ title, emoji, category, description, details = [] }) {
  return (
    <Card className="h-100 hobby-card">
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          {emoji && (
            <span className="hobby-emoji me-2" aria-hidden="true">
              {emoji}
            </span>
          )}
          <Card.Title className="mb-0">{title}</Card.Title>
        </div>

        {category && (
          <Badge bg="secondary" className="mb-2">
            {category}
          </Badge>
        )}

        {description && <Card.Text className="mb-2">{description}</Card.Text>}

        {details.length > 0 && (
          <ul className="mb-0">
            {details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
}
