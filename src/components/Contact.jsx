// src/components/Contact.jsx
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Alert,
  AlertIcon,
  VStack,
} from "@chakra-ui/react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  }

  return (
    <Box as="section" py={8}>
      <Container maxW="lg">
        <Heading mb={6}>Contact Me</Heading>

        <Box as="form" onSubmit={handleSubmit}>
          <VStack align="stretch" spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" alignSelf="flex-start">
              Send
            </Button>

            {submitted && (
              <Alert status="success">
                <AlertIcon />
                Thanks! Your message was recorded (check console for now).
              </Alert>
            )}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
