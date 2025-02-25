import { HStack, Center, Text } from "@chakra-ui/react";
import Header from "./Header.jsx";
import Description from "./Description.jsx";
import Tecnologies from "./Tecnologies.jsx";
import Timeline from "./Timeline.jsx";
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <Center>
          <HStack position="relative" bottom="15vh">
            <Text color="whitesmoke" fontSize="xxx-large">Olá, eu sou o Matheus <span>👋</span></Text>
          </HStack>
      </Center>
      <Description></Description>
      <Tecnologies></Tecnologies>
      <Timeline></Timeline>
    </>
  )
}

export default App
