import { HStack, Avatar, Flex, Text, Center } from "@chakra-ui/react";
import profile from "./assets/profile.jpeg";

function App() {
    return (
        <>
        <Center>
            <HStack paddingTop="10vh">
                <Flex>
                    <Text textStyle="xl" fontWeight="medium" position="relative" left="15vw">Sobre Mim</Text>
                    <Text textAlign="justify" width="25vw" position="relative" top="6vh">Atualmente trabalho como suporte técnico a sistemas ERP, 
                        tenho interesse pela área de desenvolvimento web, com foco em aplicações Fullstack.</Text>
                    <Avatar.Root position="relative" bottom="2vh" left="5vw" size="2xl" variant="outline">
                        <Avatar.Image src={profile}></Avatar.Image>
                    </Avatar.Root>
                </Flex>
            </HStack>
        </Center>
        </>
    )
}

export default App;