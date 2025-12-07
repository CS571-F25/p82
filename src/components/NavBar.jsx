// src/components/NavBar.jsx
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Container,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/courses", label: "Courses" },
  { to: "/hobbies", label: "Hobbies" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

function NavLinkItem({ to, label, end }) {
  return (
    <Box
      as={NavLink}
      to={to}
      end={end}
      px={3}
      py={2}
      rounded="md"
      fontSize="sm"
      _hover={{ bg: "gray.700" }}
      style={({ isActive }) => ({
        backgroundColor: isActive ? "#2D3748" : "transparent",
        color: "white",
      })}
    >
      {label}
    </Box>
  );
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.900" color="white" position="sticky" top={0} zIndex={10}>
      <Container maxW="6xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Text fontWeight="bold">Artur Sobol</Text>

          {/* Desktop links */}
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLinkItem key={link.to} {...link} />
            ))}
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
        </Flex>

        {/* Mobile menu */}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={1}>
              {links.map((link) => (
                <NavLinkItem key={link.to} {...link} />
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
