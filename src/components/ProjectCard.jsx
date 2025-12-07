// src/components/ProjectCard.jsx
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";

export default function ProjectCard({ title, timeframe, description, tech }) {
  return (
    <Card h="100%">
      <CardBody>
        <Heading size="md" mb={1}>
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>
          {timeframe}
        </Text>
        <Text mb={3}>{description}</Text>
        {tech && (
          <Text fontSize="sm">
            <strong>Tech:</strong> {tech}
          </Text>
        )}
      </CardBody>
    </Card>
  );
}
