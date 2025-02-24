import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconButton, HStack, Link } from "@chakra-ui/react";
import './Header.css';

function App() {
    return (
        <>
            <div className="conteudo">
                <HStack>
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
                </HStack>
            </div>
        </>
    )
}

export default App;