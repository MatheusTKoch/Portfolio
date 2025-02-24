import { HStack, Avatar, Flex, Text } from "@chakra-ui/react";
import profile from "./assets/profile.jpeg";

function App() {
    return (
        <>
        <HStack>
            <Flex>
                <Text textStyle="xl" fontWeight="medium">Sobre Mim</Text>
                <Avatar.Root size="2xl" variant="outline">
                    <Avatar.Image src={profile}></Avatar.Image>
                </Avatar.Root>
            </Flex>
        </HStack>
        </>
    )
}

export default App;