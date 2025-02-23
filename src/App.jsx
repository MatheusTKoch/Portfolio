import { Avatar, HStack } from "@chakra-ui/react";
import profile from "../src/assets/profile.jpeg"
import './App.css'

function App() {
let size = "md";

  return (
    <>
      <div>
        <HStack>
          <h1>Olá, eu sou o Matheus </h1>
          <Avatar.Root size={size}>
            <Avatar.Image src={profile}></Avatar.Image>
          </Avatar.Root>
        </HStack>
      </div>
    </>
  )
}

export default App
