import { Text, IconButton, Box, Container, SimpleGrid } from "@chakra-ui/react";
import { FaVuejs, FaReact, FaNodeJs, FaPython, FaDocker, FaFire } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiPostgresql, SiDelphi, SiRedis } from "react-icons/si";
import { Tooltip } from "./components/ui/tooltip";

const technologies = [
    {
        label: "Vue",
        icon: FaVuejs,
        color: "green.400",
        tooltip: "Vue.js - Framework principal para interfaces web modernas"
    },
    {
        label: "React",
        icon: FaReact,
        color: "cyan.400",
        tooltip: "React - Biblioteca JavaScript para interfaces de usuário"
    },
    {
        label: "Node",
        icon: FaNodeJs,
        color: "green.400",
        tooltip: "Node.js - Runtime JavaScript para APIs e backends"
    },
    {
        label: "Javascript",
        icon: IoLogoJavascript,
        color: "yellow.400",
        tooltip: "JavaScript - Linguagem base para desenvolvimento web"
    },
    {
        label: "Typescript",
        icon: SiTypescript,
        color: "blue.600",
        tooltip: "TypeScript - JavaScript tipado para projetos mais robustos"
    },
    {
        label: "PostgreSQL",
        icon: SiPostgresql,
        color: "blue.500",
        tooltip: "PostgreSQL - Banco relacional usado em ERP e projetos web"
    },
    {
        label: "Firebird",
        icon: FaFire,
        color: "orange.400",
        tooltip: "Firebird - Banco de dados utilizado em sistemas ERP"
    },
    {
        label: "Delphi",
        icon: SiDelphi,
        color: "red.500",
        tooltip: "Delphi - Desenvolvimento desktop para sistemas ERP"
    },
    {
        label: "Docker",
        icon: FaDocker,
        color: "blue.400",
        tooltip: "Docker - Containerização de aplicações e infraestrutura"
    },
    {
        label: "Redis",
        icon: SiRedis,
        color: "red.400",
        tooltip: "Redis - Cache e sessões em aplicações web"
    },
    {
        label: "Python",
        icon: FaPython,
        color: "blue.400",
        tooltip: "Python - Scripts, automações e ferramentas auxiliares"
    }
];

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
                    {technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <Tooltip key={tech.label} content={tech.tooltip} interactive>
                                <IconButton
                                    aria-label={tech.label}
                                    size="2xl"
                                    variant="ghost"
                                    color={tech.color}
                                    rounded="xl"
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: "translateY(-4px)",
                                        bg: "whiteAlpha.200"
                                    }}
                                    bg="transparent"
                                >
                                    <Icon />
                                </IconButton>
                            </Tooltip>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Technologies;
