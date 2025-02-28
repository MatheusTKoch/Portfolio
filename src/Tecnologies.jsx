import { Text, IconButton, Box, Container, SimpleGrid } from "@chakra-ui/react";
import { FaVuejs, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";

function Technologies() {
    return (
        <Box
            as="section"
            py={{ base: 25, md: 35 }} 
        >
            <Container maxW="container.lg">
                <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    mb={{ base: 12, md: 18 }}
                    paddingBottom={"5%"} 
                >
                    Tecnologias
                </Text>
                <SimpleGrid
                    columns={{ base: 2, sm: 3, md: 4 }}
                    spacing={{ base: 4, md: 6 }}
                    gap={8}
                    justifyItems="center"
                    maxW="900px" 
                    mx="auto"
                    px={{ base: 10, md: 14 }} 
                >
                    <IconButton
                        aria-label="Vue"
                        size="2xl"
                        variant="ghost"
                        color="green.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <FaVuejs />
                    </IconButton>
                    <IconButton
                        aria-label="React"
                        size="2xl"
                        variant="ghost"
                        color="cyan.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <FaReact />
                    </IconButton>
                    <IconButton
                        aria-label="Node"
                        size="2xl"
                        variant="ghost"
                        color="green.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <FaNodeJs />
                    </IconButton>
                    <IconButton
                        aria-label="Javascript"
                        size="2xl"
                        variant="ghost"
                        color="yellow.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <IoLogoJavascript />
                    </IconButton>
                    <IconButton
                        aria-label="MySQL"
                        size="2xl"
                        variant="ghost"
                        color="blue.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <SiMysql />
                    </IconButton>
                    <IconButton
                        aria-label="Typescript"
                        size="2xl"
                        variant="ghost"
                        color="blue.600"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <SiTypescript />
                    </IconButton>
                    <IconButton
                        aria-label="Java"
                        size="2xl"
                        variant="ghost"
                        color="red.400"
                        rounded="xl"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-2px)"
                        }}>
                        <FaJava />      
                    </IconButton>
                    <IconButton
                    aria-label="Python"
                    size="2xl"
                    variant="ghost"
                    color="blue.400"
                    rounded="xl"
                    transition="all 0.3s"
                    _hover={{
                        transform: "translateY(-2px)"
                    }}>
                        <FaPython />  
                    </IconButton>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Technologies;