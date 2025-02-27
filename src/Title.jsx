import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";

function Title() {
  const fontSize = useBreakpointValue({
    base: "xl",
    sm: "2xl",
    md: "3xl",
    lg: "4xl"
  });
  
  const spacing = useBreakpointValue({
    base: 2,
    md: 4
  });

  const iconSize = useBreakpointValue({
    base: "24px",
    md: "32px",
    lg: "40px"
  });

  return (
    <Box 
      as="section"
      py={12}
      width="100%"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "center" }}
        justify="center"
        maxW="1200px"
        mx="auto"
        gap={spacing}
      >
        <Text
          fontSize={fontSize}
          fontWeight="bold"
          textAlign={{ base: "center", md: "left" }}
        >
          Olá, eu sou o Matheus
        </Text>
        <Text fontSize={iconSize} display="inline-block">
          👋
        </Text>
      </Flex>
    </Box>
  );
}

export default Title;