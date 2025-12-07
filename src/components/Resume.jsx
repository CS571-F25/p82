// src/components/Resume.jsx
import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  SimpleGrid,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function Resume() {
  return (
    <Box as="section" py={8}>
      <Container maxW="6xl">
        <Heading mb={6}>Resume</Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {/* Education */}
          <Card>
            <CardBody>
              <Heading size="md" mb={3}>
                Education
              </Heading>
              <Text fontWeight="bold">
                University of Wisconsin–Madison
              </Text>
              <Text>B.S. Computer Science</Text>
              <Text fontSize="sm" color="gray.500">
                Expected Graduation: 2026
              </Text>
            </CardBody>
          </Card>

          {/* Experience */}
          <Card>
            <CardBody>
              <Heading size="md" mb={3}>
                Experience
              </Heading>
              <List spacing={1}>
                <ListItem>
                  Course projects in web, Android, and systems programming
                </ListItem>
                <ListItem>
                  Team-based software development in CS/ECE courses
                </ListItem>
              </List>
            </CardBody>
          </Card>

          {/* Skills */}
          <Card>
            <CardBody>
              <Heading size="md" mb={3}>
                Skills
              </Heading>
              <Text mb={1}>
                <strong>Languages:</strong> Java, Kotlin, C, JavaScript, Python
              </Text>
              <Text mb={1}>
                <strong>Frameworks:</strong> React, React Native, Compose
              </Text>
              <Text>
                <strong>Interests:</strong> systems, hardware, mobile, web
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
