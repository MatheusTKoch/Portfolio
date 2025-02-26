import { Center, Text, Card, Image, Button } from "@chakra-ui/react";

function App() {
    return (
        <>
        <Text textStyle="xl" fontWeight="medium" position="relative" top="15vh">Projetos</Text>
            <Center position="relative" top="10vh" paddingTop="10vh">
                <Card.Root position="relative" height="40vh" width="30vw" padding="2%">
                    <Card.Body>
                        <Image></Image>
                    </Card.Body>
                    <Card.Title textAlign="center">Weather App</Card.Title>
                    <Card.Description padding="5%">
                        Aplicativo para detalhamento da previsão atual.
                    </Card.Description>
                    <Button variant="outline" textAlign="center" color="whitesmoke" >Visitar</Button>
                </Card.Root>
            </Center>
        </>
    )
};

export default App;