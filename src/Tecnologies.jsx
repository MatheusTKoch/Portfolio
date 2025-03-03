import { Text, IconButton, Box, Container, SimpleGrid } from "@chakra-ui/react";
import { FaVuejs, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";
import { Tooltip } from "./components/ui/tooltip";

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
                    <Tooltip content="Vue.js - Framework JavaScript progressivo para construção de interfaces">
                        <IconButton
                            aria-label="Vue"
                            size="2xl"
                            variant="ghost"
                            color="green.400"
                            rounded="xl"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-2px)",
                                bg: "whiteAlpha.200"
                            }}
                            bg="transparent">
                            <FaVuejs />
                        </IconButton>
                    </Tooltip>

                    <Tooltip content="React - Biblioteca JavaScript para criar interfaces de usuário">
                        <IconButton
                            aria-label="React"
                            size="2xl"
                            variant="ghost"
                            color="cyan.400"
                            rounded="xl"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-2px)",
                                bg: "whiteAlpha.200"
                            }}
                            bg="transparent">
                            <FaReact />
                        </IconButton>
                    </Tooltip>

                    <Tooltip content="Node.js - Ambiente de execução JavaScript server-side">
                        <IconButton
                            aria-label="Node"
                            size="2xl"
                            variant="ghost"
                            color="green.400"
                            rounded="xl"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-2px)",
                                bg: "whiteAlpha.200"
                            }}
                            bg="transparent">
                            <FaNodeJs />
                        </IconButton>
                    </Tooltip>

                    <Tooltip content="JavaScript - Linguagem de programação versátil e dinâmica">
                        <IconButton
                            aria-label="Javascript"
                            size="2xl"
                            variant="ghost"
                            color="yellow.400"
                            rounded="xl"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-2px)",
                                bg: "whiteAlpha.200"
                            }}
                            bg="transparent">
                            <IoLogoJavascript />
                        </IconButton>
                    </Tooltip>

                    <Tooltip content="MySQL - Sistema de gerenciamento de banco de dados relacional">
                        <IconButton
                            aria-label="MySQL"
                            size="2xl"
                            variant="ghost"
                            color="blue.400"
                            rounded="xl"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-2px)",
                                bg: "whiteAlpha.200"
                            }}
                            bg="transparent">
                            <SiMysql />
                        </IconButton>
                    </Tooltip>

                    <Tooltip content="TypeScript - Superset tipado do JavaScript">
                        <IconButton
                            aria-label="Typescript"
                            size="2xl"
                            variant="ghost"
                            color="blue.600"
                            rounded="xl"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-2px)",
                                bg: "whiteAlpha.200"
                            }}
                            bg="transparent">
                            <SiTypescript />
                        </IconButton>
                    </Tooltip>

                    <Tooltip content="Java - Linguagem de programação orientada a objetos">
                        <IconButton
                            aria-label="Java"
                            size="2xl"
                            variant="ghost"
                            color="red.400"
                            rounded="xl"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-2px)",
                                bg: "whiteAlpha.200"
                            }}
                            bg="transparent">
                            <FaJava />
                        </IconButton>
                    </Tooltip>

                    <Tooltip content="Python - Linguagem de programação de alto nível">
                        <IconButton
                            aria-label="Python"
                            size="2xl"
                            variant="ghost"
                            color="blue.400"
                            rounded="xl"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-2px)",
                                bg: "whiteAlpha.200"
                            }}
                            bg="transparent">
                            <FaPython />
                        </IconButton>
                    </Tooltip>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Technologies;