import { HStack, Center, Text } from "@chakra-ui/react";

function App() {
    return (
        <>
            <Center>
                <HStack position="relative" top="10vh" paddingBottom="5%">
                    <Text color="whitesmoke" fontSize="xxx-large">Olá, eu sou o Matheus <span>👋</span></Text>
                </HStack>
            </Center>
        </>
    )
};

export default App;