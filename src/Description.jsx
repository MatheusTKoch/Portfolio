import { Box, Text, VStack, Container, Flex, Avatar } from "@chakra-ui/react";

function Description() {
    return (
        <Box
            as="section"
            py={{ base: 8, md: 16 }}
            px={{ base: 4, md: 8 }}
        >
            <Container maxW="container.lg">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    gap={{ base: 6, md: 12 }}
                >
                    <Avatar.Root
                        name="Matheus Koch"
                        size={{ base: "xl", md: "2xl" }}
                        border="2px solid"
                        borderColor="gray.400"
                        _hover={{
                            transform: "scale(1.05)",
                            transition: "all 0.3s"
                        }}
                    >
                        <Avatar.Image
                            src="profile.jpeg" />
                    </Avatar.Root>
                    <VStack
                        align={{ base: "center", md: "start" }}
                        spacing={4}
                        flex={1}
                    >
                        <Text
                            fontSize={{ base: "2xl", md: "3xl" }}
                            fontWeight="bold"
                            color="whitesmoke"
                        >
                            Sobre Mim
                        </Text>
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            color="whitesmoke"
                            textAlign={{ base: "center", md: "left" }}
                        >
                            Atualmente trabalho como suporte técnico a sistemas ERP, 
                            tenho interesse pela área de desenvolvimento web, com foco em aplicações Fullstack.
                        </Text>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
}

export default Description;