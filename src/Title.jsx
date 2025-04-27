import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import './App.css';

function Title() {
  const fontSize = useBreakpointValue({
    base: "3xl",
    sm: "4xl",
    md: "5xl",
    lg: "6xl"
  });
  
  const spacing = useBreakpointValue({
    base: 4,
    md: 6
  });

  const iconSize = useBreakpointValue({
    base: "32px",
    md: "40px",
    lg: "48px"
  });

  return (
    <Box 
      as="section"
      width="100%"
      paddingTop={{ base: "120px", md: "140px" }}
      paddingBottom={{ base: "40px", md: "60px" }}
      minHeight={{ base: "30vh", md: "40vh" }}
      position="relative"
      zIndex="1"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={spacing}
        >
          <Text
            fontSize={fontSize}
            fontWeight="bold"
            textAlign="center"
            letterSpacing="tight"
            color="whitesmoke"
            mb={{ base: 2, md: 0 }}
          >
            Olá, eu sou o Matheus
          </Text>
          <Text 
            fontSize={iconSize}
            className="wave-animation"
          >
            👋
          </Text>
        </Flex>
        <Text
          mt={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.300"
          textAlign="center"
          maxW="600px"
        >
          Desenvolvedor Web Fullstack e estudante de Análise e Desenvolvimento de Sistemas   
        </Text>
      </Flex>
    </Box>
  );
}

export default Title;