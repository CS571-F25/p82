// src/components/Projects.jsx
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Campus Pathfinder",
    timeframe: "2024 · UW–Madison",
    description:
      "Graph-based route-finding tool to help students find the fastest paths between campus buildings.",
    tech: "Java, Graph algorithms, HTML/CSS",
  },
  {
    title: "Note App (Android)",
    timeframe: "2024 · CS 407",
    description:
      "Compose-based note-taking app with reminders and scheduled notifications.",
    tech: "Kotlin, Jetpack Compose, Room",
  },
  {
    title: "Personal Portfolio",
    timeframe: "2025 · Web Project",
    description:
      "This website – an interactive place to show my resume, projects, and interests.",
    tech: "React, Vite, Chakra UI",
  },
];

export default function Projects() {
  return (
    <Box as="section" py={8}>
      <Container maxW="6xl">
        <Heading mb={2}>Projects</Heading>
        <Text color="gray.600" mb={6}>
          A sample of things I’ve built across web, Android, and systems.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
