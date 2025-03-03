import { useState } from "react";
import PropTypes from "prop-types";
import { Text, Image, Button, VStack, HStack, Box, Container,Heading,Badge,Link} from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";

const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "Aplicativo para detalhamento da previsão atual com suporte para múltiplas cidades e visualização de dados.",
    image: "weather_app.png",
    technologies: ["VueJS", "Flask", "Open Weather API"],
    demoUrl: "https://matheustkoch.github.io/weather_app/",
    repoUrl: "https://github.com/MatheusTKoch/weather_app"
  },
  {
    id: 2,
    title: "Divismart",
    description: "Plataforma para controle e acompanhamento de investimentos, com ativos como ações, fundos imobiliários e tesouro direto. Também conta com gráficos para auxiliar na visualização - em progresso.",
    image: "divismart.png",
    technologies: ["Vue", "ExpressJS", "MySQL", "Cheerio"],
    demoUrl: "",
    repoUrl: "https://github.com/MatheusTKoch/DiviSmart"
  },
  {
    id: 3,
    title: "Task Project",
    description: "Aplicativo para controle da execução de tarefas diárias.",
    image: "task_project.png",
    technologies: ["Vue", "Firebase", "ExpressJS"],
    demoUrl: "https://matheustkoch.github.io/task-project/",
    repoUrl: "https://github.com/MatheusTKoch/task-project"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardBg = useColorModeValue(
    'rgba(54, 50, 50, 0.9)',  
    'rgba(45, 55, 72, 0.9)'      
  );
  const borderColor = useColorModeValue(
    'rgba(54, 50, 50, 0.9)',  
    'rgba(74, 85, 104, 0.6)'     
  );
  const textColor = useColorModeValue(
    'whitesmoke',     
    'rgba(226, 232, 240, 0.9)'   
  );
  const badgeBg = useColorModeValue(
    'rgba(226, 232, 240, 0.8)',  
    'rgba(74, 85, 104, 0.8)'     
  );
  const badgeColor = useColorModeValue(
    'rgba(41, 46, 54, 0.9)',     
    'rgba(226, 232, 240, 0.9)'  
  );

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={isHovered ? "xl" : "lg"}
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
        <Box display="flex" alignItems="baseline" flexWrap="wrap" gap={2}>
          {project.technologies.map((tech, index) => (
            <Badge 
              key={index} 
              borderRadius="full" 
              px={2} 
              bg={badgeBg}
              color={badgeColor}
            >
              {tech}
            </Badge>
          ))}
        </Box>
        
        <Heading
          mt={2}
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="tight"
          color={textColor}
        >
          {project.title}
        </Heading>
        
        <Text mt={2} fontSize="md" color={textColor}>
          {project.description}
        </Text>
        
        <HStack mt={4} spacing={4} justifyContent="center">
          <Button 
            as={Link}
            href={project.demoUrl}
            isExternal
            colorScheme="blue"
            variant="solid"
            size="sm"
            target="_blank"
            _hover={{ 
              transform: project.title === "Divismart" ? "none" : "scale(1.05)",
              bg: project.title === "Divismart" ? "blue.300" : "blue.500"
            }}
            isDisabled={project.title === "Divismart"}
            opacity={project.title === "Divismart" ? 0.6 : 1}
            cursor={project.title === "Divismart" ? "not-allowed" : "pointer"}
          >
            {project.title === "Divismart" ? "Em Desenvolvimento" : "Ver Demo"}
          </Button>
          <Button 
            as={Link}
            href={project.repoUrl}
            isExternal
            bg="whitesmoke"
            variant="outline"
            size="sm"
            target="_blank"
            _hover={{ 
              bg: useColorModeValue('rgba(237, 242, 247, 0.8)', 'rgba(45, 55, 72, 0.8)'),
              borderColor: useColorModeValue('rgba(203, 213, 224, 0.8)', 'rgba(74, 85, 104, 0.8)')
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