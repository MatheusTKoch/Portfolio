import Header from "./Header.jsx";
import Title from "./Title.jsx";
import Description from "./Description.jsx";
import Tecnologies from "./Tecnologies.jsx";
import Projects from "./Projects.jsx";
import Timeline from "./Timeline.jsx";
import Contact from "./Contact.jsx";
import { Box } from "@chakra-ui/react";
import './App.css'

function App() {
  return (
    <Box
      position="relative"
      minH="100vh"
      _before={{
        content: '""',
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: "linear(to-br, gray.900, blue.900)",
        opacity: 0.97,
        zIndex: -2
      }}
      _after={{
        content: '""',
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 
          "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px), " +
          "radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        opacity: 0.4,
        zIndex: -1,
        animation: "backgroundMove 60s linear infinite"
      }}
    >
      <Header />
      <Title />
      <Description />
      <Tecnologies />
      <Projects />
      <Timeline />
      <Contact />
    </Box>
  );
}

export default App;
