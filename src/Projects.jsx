import { useState } from "react";
import PropTypes from "prop-types";
import {
  Text,
  Image,
  Button,
  VStack,
  HStack,
  Box,
  Container,
  Heading,
  Badge,
  Link,
  Flex,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { useColorModeValue } from "./components/ui/color-mode";

const projectsData = [
  {
    id: 1,
    title: "DiviSmart",
    description:
      "Plataforma web para gestão e análise de ativos financeiros: ações, FIIs, tesouro e dividendos, com scraping de cotações, relatórios de valorização e ambiente em Docker.",
    image: "divismart.png",
    technologies: ["Vue 3", "Express", "PostgreSQL", "Redis", "Docker", "Cheerio"],
    demoUrl: "https://matheustkoch.github.io/DiviSmart/",
    repoUrl: "https://github.com/MatheusTKoch/DiviSmart",
    featured: true
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Aplicativo para detalhamento da previsão atual com suporte para múltiplas cidades e visualização de dados.",
    image: "weather_app.png",
    technologies: ["VueJS", "Flask", "Open Weather API"],
    demoUrl: "https://matheustkoch.github.io/weather_app/",
    repoUrl: "https://github.com/MatheusTKoch/weather_app"
  },
  {
    id: 3,
    title: "Task Project",
    description: "Aplicativo para controle da execução de tarefas diárias.",
    image: "task_project.png",
    technologies: ["Vue", "Firebase", "ExpressJS"],
    demoUrl: "https://matheustkoch.github.io/task-project/",
    repoUrl: "https://github.com/MatheusTKoch/task-project"
  },
  {
    id: 4,
    title: "Backup Obsidian",
    description:
      "Script em Python para realizar backup automático de arquivos do Obsidian, com opções de agendamento e personalização.",
    image: "obsidian_backup_tool.png",
    technologies: ["Python"],
    demoUrl: "",
    repoUrl: "https://github.com/MatheusTKoch/Backup_Obsidian",
    downloadUrl: "https://github.com/MatheusTKoch/Backup_Obsidian/releases/latest"
  }
];

const featuredRepos = [
  {
    name: "ChatbotSocket",
    description: "Chatbot via sockets TCP em Node.js",
    url: "https://github.com/MatheusTKoch/ChatbotSocket"
  },
  {
    name: "moodle_app",
    description: "Aplicação PHP integrada ao Moodle",
    url: "https://github.com/MatheusTKoch/moodle_app"
  },
  {
    name: "apiMailNode",
    description: "API de e-mail com Node.js",
    url: "https://github.com/MatheusTKoch/apiMailNode"
  },
  {
    name: "PrjCursoDelphi",
    description: "Projeto de estudo e prática em Delphi",
    url: "https://github.com/MatheusTKoch/PrjCursoDelphi"
  }
];

const ProjectCard = ({ project, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardBg = useColorModeValue("rgba(54, 50, 50, 0.9)", "rgba(45, 55, 72, 0.9)");
  const borderColor = useColorModeValue(
    featured ? "rgba(35, 177, 68, 0.55)" : "rgba(54, 50, 50, 0.9)",
    featured ? "rgba(35, 177, 68, 0.45)" : "rgba(74, 85, 104, 0.6)"
  );
  const textColor = useColorModeValue("whitesmoke", "rgba(226, 232, 240, 0.9)");
  const badgeBg = useColorModeValue("rgba(226, 232, 240, 0.8)", "rgba(74, 85, 104, 0.8)");
  const badgeColor = useColorModeValue("rgba(41, 46, 54, 0.9)", "rgba(226, 232, 240, 0.9)");
  const codeHoverBg = useColorModeValue("rgba(237, 242, 247, 0.8)", "rgba(45, 55, 72, 0.8)");
  const codeHoverBorder = useColorModeValue("rgba(203, 213, 224, 0.8)", "rgba(74, 85, 104, 0.8)");
  const hasDownload = Boolean(project.downloadUrl);
  const hasDemo = Boolean(project.demoUrl);

  return (
    <Box
      maxW={featured ? "100%" : "sm"}
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={isHovered ? "xl" : "lg"}
      transition="transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"
      borderColor={borderColor}
      bg={cardBg}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transform={isHovered ? "translateY(-8px)" : "none"}
      height="100%"
    >
      <Box position="relative">
        <Image
          src={project.image}
          alt={project.title}
          objectFit="cover"
          height={featured ? { base: "220px", md: "280px" } : "200px"}
          width="100%"
          fallback={<Box height="200px" width="100%" bg="gray.100" />}
          loading="lazy"
        />
        {featured && (
          <Badge
            position="absolute"
            top={3}
            left={3}
            bg="green.500"
            color="white"
            borderRadius="md"
            px={3}
            py={1}
            fontSize="xs"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            Destaque
          </Badge>
        )}
      </Box>
      <Box p={6}>
        <Box display="flex" alignItems="baseline" flexWrap="wrap" gap={2}>
          {project.technologies.map((tech) => (
            <Badge key={tech} borderRadius="full" px={2} bg={badgeBg} color={badgeColor}>
              {tech}
            </Badge>
          ))}
        </Box>

        <Heading mt={2} fontSize={featured ? "2xl" : "xl"} fontWeight="semibold" lineHeight="tight" color={textColor}>
          {project.title}
        </Heading>

        <Text mt={2} fontSize="md" color={textColor}>
          {project.description}
        </Text>

        <HStack mt={4} spacing={4} justifyContent={featured ? "flex-start" : "center"}>
          {hasDownload ? (
            <Button
              as={Link}
              href={project.downloadUrl}
              isExternal
              colorScheme="green"
              variant="solid"
              size="sm"
              target="_blank"
              _hover={{
                transform: "scale(1.05)",
                bg: "green.500"
              }}
            >
              Download
            </Button>
          ) : hasDemo ? (
            <Button
              as={Link}
              href={project.demoUrl}
              isExternal
              colorScheme="blue"
              variant="solid"
              size="sm"
              target="_blank"
              _hover={{
                transform: "scale(1.05)",
                bg: "blue.500"
              }}
            >
              Ver Demo
            </Button>
          ) : null}
          <Button
            as={Link}
            href={project.repoUrl}
            isExternal
            bg="whitesmoke"
            variant="outline"
            size="sm"
            target="_blank"
            _hover={{
              bg: codeHoverBg,
              borderColor: codeHoverBorder,
              transform: "translateY(-1px)"
            }}
          >
            Código
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string.isRequired,
    downloadUrl: PropTypes.string,
    featured: PropTypes.bool
  }).isRequired,
  featured: PropTypes.bool
};

function Projects() {
  const featuredProject = projectsData.find((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);
  const stripBg = useColorModeValue("rgba(54, 50, 50, 0.55)", "rgba(45, 55, 72, 0.55)");
  const stripBorder = useColorModeValue("rgba(255, 255, 255, 0.08)", "rgba(74, 85, 104, 0.5)");
  const chipBg = useColorModeValue("rgba(255, 255, 255, 0.06)", "rgba(255, 255, 255, 0.06)");
  const chipHoverBg = useColorModeValue("rgba(35, 177, 68, 0.18)", "rgba(35, 177, 68, 0.22)");

  return (
    <Container maxW="container.xl" top="10vh" py={20}>
      <VStack spacing={12}>
        <Heading
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          position="relative"
          paddingBottom="5%"
        >
          Projetos
        </Heading>

        {featuredProject && (
          <Box width="100%" maxW={{ base: "100%", md: "900px" }} mx="auto">
            <ProjectCard project={featuredProject} featured />
          </Box>
        )}

        <Flex
          gap={8}
          alignItems="stretch"
          flexDirection={{ base: "column", md: "row" }}
          width="100%"
          flexWrap="wrap"
          justifyContent="center"
        >
          {otherProjects.map((project) => (
            <Box
              key={project.id}
              width={{ base: "100%", md: "calc(33.33% - 22px)" }}
              minW={{ md: "260px" }}
              flex={{ md: "1 1 280px" }}
              maxW={{ md: "360px" }}
            >
              <ProjectCard project={project} />
            </Box>
          ))}
        </Flex>

        <Box
          width="100%"
          maxW="900px"
          mx="auto"
          mt={4}
          p={{ base: 5, md: 6 }}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={stripBorder}
          bg={stripBg}
          transition="border-color 0.3s ease, transform 0.3s ease"
          _hover={{ borderColor: "rgba(35, 177, 68, 0.35)" }}
        >
          <Flex
            direction={{ base: "column", sm: "row" }}
            align={{ base: "flex-start", sm: "center" }}
            justify="space-between"
            gap={3}
            mb={4}
          >
            <Heading fontSize="xl" color="whitesmoke" fontWeight="semibold">
              Repositórios em destaque
            </Heading>
            <Link
              href="https://github.com/MatheusTKoch"
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap={2}
              color="green.300"
              fontSize="sm"
              _hover={{ color: "green.200", textDecoration: "none" }}
            >
              <FaGithub />
              Ver todos no GitHub
            </Link>
          </Flex>
          <Wrap spacing={3}>
            {featuredRepos.map((repo) => (
              <WrapItem key={repo.name}>
                <Link
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Box
                    px={4}
                    py={3}
                    borderRadius="md"
                    bg={chipBg}
                    borderWidth="1px"
                    borderColor="transparent"
                    transition="all 0.25s ease"
                    _hover={{
                      bg: chipHoverBg,
                      borderColor: "rgba(35, 177, 68, 0.4)",
                      transform: "translateY(-2px)"
                    }}
                  >
                    <Text color="whitesmoke" fontWeight="medium" fontSize="sm">
                      {repo.name}
                    </Text>
                    <Text color="gray.400" fontSize="xs" mt={0.5}>
                      {repo.description}
                    </Text>
                  </Box>
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </VStack>
    </Container>
  );
}

export default Projects;
