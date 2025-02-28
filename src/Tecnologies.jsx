import { Text, IconButton, Box, Container, SimpleGrid } from "@chakra-ui/react";
import { FaVuejs, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";

function Technologies() {
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
                    Tecnologias
                </Text>
                <SimpleGrid
                    columns={{ base: 2, sm: 3, md: 4 }}
                    spacing={{ base: 4, md: 6 }}
                    justifyItems="center"
                    maxW="800px"
                    mx="auto"
                >
                    <IconButton
                        aria-label="Vue"
                        size="lg"
                        variant="ghost"
                        color="green.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <FaVuejs size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="React"
                        size="lg"
                        variant="ghost"
                        color="cyan.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <FaReact size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="Node"
                        size="lg"
                        variant="ghost"
                        color="green.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <FaNodeJs size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="Javascript"
                        size="lg"
                        variant="ghost"
                        color="yellow.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <IoLogoJavascript size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="MySQL"
                        size="lg"
                        variant="ghost"
                        color="blue.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <SiMysql size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="Typescript"
                        size="lg"
                        variant="ghost"
                        color="blue.600"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <SiTypescript size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="Java"
                        size="lg"
                        variant="ghost"
                        color="red.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <FaJava size={24} />      
                    </IconButton>
                    <IconButton
                    aria-label="Python"
                    size="lg"
                    variant="ghost"
                    color="blue.400"
                    rounded="xl"
                    transition="all 0.3s"
                    _hover={{
                        transform: "translateY(-2px)"
                    }}>
                        <FaPython size={24} />  
                    </IconButton>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Technologies;