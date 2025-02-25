import { HStack, Center } from "@chakra-ui/react";
import Header from "./Header.jsx";
import Description from "./Description.jsx";
import Content from "./Content.jsx";
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <Center>
        <div className={"conteudo"}> 
          <HStack position="relative" bottom="15vh">
            <h1>Olá, eu sou o Matheus <span>👋</span></h1>
          </HStack>
        </div>
      </Center>
      <Description></Description>
      <Content></Content>
    </>
  )
}

export default App
