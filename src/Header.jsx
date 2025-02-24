import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconButton, Flex, Link } from "@chakra-ui/react";

function App() {
    return (
        <>
            <Flex justify="flex-end" gap="2" position="absolute" top="2vh" right="10vw">
                <Link href="https://github.com/MatheusTKoch" target="_blank">
                    <IconButton size="xl" variant="ghost" rounded="full">
                        <FaGithub size="xl"></FaGithub>
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/matheus-trilha-koch-712806162/" target="_blank">
                    <IconButton size="xl" variant="ghost" rounded="full">
                        <FaLinkedin size="xl"></FaLinkedin>
                    </IconButton>
                </Link>
            </Flex>
        </>
    )
}

export default App;