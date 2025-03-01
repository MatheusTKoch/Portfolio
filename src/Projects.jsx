import { useState } from "react";
import PropTypes from "prop-types";
import { Text, Image, Button, VStack, HStack, Box, Container,Heading,Badge,Link} from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";

const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "Aplicativo para detalhamento da previsão atual com suporte para múltiplas cidades e visualização de dados.",
    image: "/weather_app.png",
    technologies: ["VueJS", "Flask", "Open Weather API"],
    demoUrl: "https://matheustkoch.github.io/weather_app/",
    repoUrl: "https://github.com/MatheusTKoch/weather_app"
  },
  {
    id: 2,
    title: "Divismart",
    description: "Plataforma para controle e acompanhamento de investimentos, com ativos como ações, fundos imobiliários e tesouro direto. Também conta com gráficos para auxiliar na visualização - em progresso.",
    image: "/divismart.png",
    technologies: ["Vue", "ExpressJS", "MySQL", "Cheerio"],
    demoUrl: "",
    repoUrl: "https://github.com/MatheusTKoch/DiviSmart"
  },
  {
    id: 3,
    title: "Task Project",
    description: "Aplicativo para controle execução de tarefas diárias.",
    image: "/task_project.png",
    technologies: ["Vue", "Firebase", "ExpressJS"],
    demoUrl: "https://matheustkoch.github.io/task-project/",
    repoUrl: "https://github.com/MatheusTKoch/task-project"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={isHovered ? "lg" : "md"}
      transition="all 0.3s"
      borderColor={borderColor}
      bg={cardBg}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transform={isHovered ? "translateY(-8px)" : "none"}
      height="100%"
    >
      <Image
        src={project.image}
        alt={project.title}
        objectFit="cover"
        height="200px"
        width="100%"
        fallback={<Box height="200px" width="100%" bg="gray.100" />}
        loading="lazy"
      />
      
      <Box p={6}>
        <Box display="flex" alignItems="baseline">
          {project.technologies.map((tech, index) => (
            <Badge key={index} borderRadius="full" px={2} mr={1} colorScheme="teal">
              {tech}
            </Badge>
          ))}
        </Box>
        
        <Heading
          mt={2}
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="tight"
        >
          {project.title}
        </Heading>
        
        <Text mt={2} fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
          {project.description}
        </Text>
        
        <HStack mt={4} spacing={4} justifyContent="center">
          <Button 
            as={Link}
            href={project.demoUrl}
            isExternal
            colorScheme="teal"
            variant="solid"
            size="sm"
            target="_blank"
            _hover={{ transform: "scale(1.05)" }}
          >
            Ver Demo
          </Button>
          <Button 
            as={Link}
            href={project.repoUrl}
            isExternal
            colorScheme="gray"
            variant="outline"
            size="sm"
            target="_blank"
            _hover={{ bg: "gray.100" }}
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
    demoUrl: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired
  }).isRequired
};

function Projects() {
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
        
        <HStack 
          spacing={8} 
          alignItems="stretch" 
          flexDirection={{ base: "column", md: "row" }}
          width="100%"
        >
          {projectsData.map((project) => (
            <Box 
              key={project.id} 
              width={{ base: "100%", md: "33.33%" }}
              mb={{ base: 8, md: 0 }}
            >
              <ProjectCard project={project} />
            </Box>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
}

export default Projects;