import { HStack } from "@chakra-ui/react";
import Header from "./Header.jsx";
import Description from "./Description.jsx";
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <div className={"conteudo"}> 
        <HStack position="relative" bottom="15vh">
          <h1>Olá, eu sou o Matheus <span>👋</span></h1>
        </HStack>
        <Description></Description>
      </div>
    </>
  )
}

export default App
