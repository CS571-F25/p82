// src/components/HobbyCard.jsx
import {
  Box,
  Text,
  Heading,
  Badge,
  VStack,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function HobbyCard({
  title,
  emoji,
  category,
  description,
  details = [],
}) {
  return (
    <Box
      p={5}
      borderRadius="lg"
      bg="white"
      shadow="md"
      transition="0.15s"
      _hover={{ transform: "translateY(-3px)", shadow: "xl" }}
    >
      <VStack align="start" spacing={2}>
        <Heading size="md" display="flex" alignItems="center" gap={2}>
          {emoji && (
            <span style={{ fontSize: "1.6rem" }} aria-hidden="true">
              {emoji}
            </span>
          )}
          {title}
        </Heading>

        {category && (
          <Badge colorScheme="purple" mb={1}>
            {category}
          </Badge>
        )}

        {description && <Text>{description}</Text>}

        {details.length > 0 && (
          <List spacing={1}>
            {details.map((item) => (
              <ListItem key={item}>• {item}</ListItem>
            ))}
          </List>
        )}
      </VStack>
    </Box>
  );
}
