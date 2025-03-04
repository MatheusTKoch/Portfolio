import { Box, Container, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <Box
      as="section"
      py={{ base: 8, md: 16 }}
    >
      <Container maxW="container.lg">
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
          mb={{ base: 6, md: 10 }}
        >
          Contato
        </Text>
        
        <HStack spacing={8} justify="center">
          <Link
            href="https://github.com/MatheusTKoch"
            target="_blank"
            display="flex"
            alignItems="center"
            p={4}
            borderRadius="lg"
            bg="whiteAlpha.200"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-2px)",
              bg: "whiteAlpha.300"
            }}
          >
            <Icon as={FaGithub} boxSize={8} color="white" mr={2} />
            <Text color="white" fontSize="lg">GitHub</Text>
          </Link>

          <Link
            href="https://www.linkedin.com/in/matheus-trilha-koch-712806162/"
            target="_blank"
            display="flex"
            alignItems="center"
            p={4}
            borderRadius="lg"
            bg="whiteAlpha.200"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-2px)",
              bg: "whiteAlpha.300"
            }}
          >
            <Icon as={FaLinkedin} boxSize={8} color="white" mr={2} />
            <Text color="white" fontSize="lg">LinkedIn</Text>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}

export default Contact;