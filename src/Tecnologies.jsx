import { HStack, Text, IconButton, Box, Center} from "@chakra-ui/react";
import { FaVuejs, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";

function App() {
    return (
        <>
        <Center>
            <Box position="relative" top="10vh">
                <Text textStyle="xl" fontWeight="medium" position="relative">Tecnologias</Text>
                <HStack position="relative" paddingTop="1vh">
                    <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="green" _hover={{ outline: "solid", outlineColor:"green.400" }}>
                        <FaVuejs></FaVuejs>
                    </IconButton>
                    <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="cyan" _hover={{ outline: "solid", outlineColor:"cyan.400" }}>
                        <FaReact></FaReact>
                    </IconButton>
                    <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="green" _hover={{ outline: "solid", outlineColor:"green.400" }}>
                        <FaNodeJs></FaNodeJs>
                    </IconButton>
                    <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="yellow" _hover={{ outline: "solid", outlineColor:"yellow.400" }}>
                        <IoLogoJavascript></IoLogoJavascript>
                    </IconButton> 
                </HStack>
                <HStack position="relative" paddingTop="1vh">
                    <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="blue" _hover={{ outline: "solid", outlineColor:"blue.400" }}>
                        <SiMysql></SiMysql>
                    </IconButton> 
                    <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="blue" _hover={{ outline: "solid", outlineColor:"blue.600" }}>
                        <SiTypescript></SiTypescript>
                    </IconButton>
                    <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="blue" _hover={{ outline: "solid", outlineColor:"red.400" }}>
                        <FaJava></FaJava>
                    </IconButton>
                    <IconButton size="xl" variant="ghost" rounded="xl" colorPalette="yellow" _hover={{ outline: "solid", outlineColor:"blue.400" }}>
                        <FaPython></FaPython>
                    </IconButton>
                </HStack>
            </Box>
        </Center>
        </>
    )
}

export default App;