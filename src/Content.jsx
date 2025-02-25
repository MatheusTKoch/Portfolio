import { HStack, Text, IconButton, Box} from "@chakra-ui/react";
import { FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function App() {
    return (
        <>
        <Box position="relative" top="10vh">
            <Text textStyle="xl" fontWeight="medium" position="relative" right="2vw">Tecnologias</Text>
            <HStack position="relative" left="12vw" paddingTop="1vh">
                <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="green">
                    <FaVuejs></FaVuejs>
                </IconButton>
                <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="blue">
                    <FaReact></FaReact>
                </IconButton>
                <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="green">
                    <FaNodeJs></FaNodeJs>
                </IconButton>
                <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="yellow">
                    <IoLogoJavascript></IoLogoJavascript>
                </IconButton> 
            </HStack>
        </Box>
        </>
    )
}

export default App;