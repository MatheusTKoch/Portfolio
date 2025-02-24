import { FaGithub } from "react-icons/fa";
import { Icon, HStack } from "@chakra-ui/react";
function App() {
    return (
        <>
            <div className="conteudo">
                <HStack>
                    <Icon>
                        <FaGithub></FaGithub>
                    </Icon>
                </HStack>
            </div>
        </>
    )
}

export default App;