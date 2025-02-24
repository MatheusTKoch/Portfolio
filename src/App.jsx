import { Avatar, HStack } from "@chakra-ui/react";

import profile from "../src/assets/profile.jpeg"
import './App.css'

function App() {

  return (
    <>
      <div className="conteudo"> 
        <HStack>
          <h1>Olá, eu sou o Matheus </h1>
          <Avatar.Root size="2xl" variant="outline">
            <Avatar.Image src={profile}></Avatar.Image>
          </Avatar.Root>
        </HStack>
      </div>
    </>
  )
}

export default App
