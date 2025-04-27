import Background from "./Background";
import Header from "./Header";
import Title from "./Title";
import Description from "./Description";
import Tecnologies from "./Tecnologies";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Contact from "./Contact";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Background>
      <Box
        position="relative"
        minH="100vh"
        width="100%"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          width: "100%"
        }}
      >
        <Header />
        <Box pt="70px" position="relative" zIndex="1" width="100%"> 
          <Title />
          <Description />
          <Tecnologies />
          <Projects />
          <Timeline />
          <Contact />
        </Box>
      </Box>
    </Background>
  );
}

export default App;
