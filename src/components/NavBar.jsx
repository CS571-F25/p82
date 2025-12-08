// src/components/NavBar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Link,
  Text,
  useDisclosure,
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

function NavItem({ to, label, end, onClick }) {
  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <Link
          px={3}
          py={2}
          rounded="full"
          fontSize="sm"
          fontWeight={isActive ? "semibold" : "medium"}
          bg={isActive ? "whiteAlpha.200" : "transparent"}
          color="white"
          _hover={{ textDecoration: "none", bg: "whiteAlpha.200" }}
          onClick={onClick}
        >
          {label}
        </Link>
      )}
    </NavLink>
  );
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuButtonFocused, setMenuButtonFocused] = useState(false);

  const handleNavClick = () => {
    onClose();
  };

  return (
    <Box
      as="header"
      bg="gray.900"
      color="white"
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="sm"
    >
      <Flex
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        h={16}
        align="center"
        justify="space-between"
      >
        {/* Brand */}
        <NavLink to="/" onClick={handleNavClick}>
          <Text
            fontWeight="semibold"
            fontSize="lg"
            letterSpacing="wide"
            _hover={{ textDecoration: "none" }}
          >
            Artur Sobol
          </Text>
        </NavLink>

        {/* Desktop links */}
        <HStack spacing={2} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <NavItem
              key={link.to}
              {...link}
              onClick={handleNavClick}
            />
          ))}
        </HStack>

        {/* Mobile menu button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.300" }}
          onClick={isOpen ? onClose : onOpen}
          onFocus={() => setMenuButtonFocused(true)}
          onBlur={() => setMenuButtonFocused(false)}
        />
      </Flex>

      {/* Mobile menu */}
      {isOpen && (
        <Box
          bg="gray.900"
          borderTopWidth="1px"
          borderColor="whiteAlpha.200"
          display={{ base: "block", md: "none" }}
        >
          <Stack
            maxW="6xl"
            mx="auto"
            px={{ base: 4, md: 6 }}
            py={3}
            spacing={1}
          >
            {links.map((link) => (
              <NavItem
                key={link.to}
                {...link}
                onClick={handleNavClick}
              />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
