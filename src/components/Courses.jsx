// src/components/Courses.jsx
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
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
    <Box as="section" py={8}>
      <Container maxW="6xl">
        <Heading mb={2}>Courses</Heading>
        <Text color="gray.600" mb={6}>
          A selection of classes that shaped how I think about systems,
          hardware, mobile, and web development.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {courses.map((course) => (
            <CourseCard key={course.code} {...course} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
