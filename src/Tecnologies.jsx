import { HStack, Text, IconButton, Box, Center} from "@chakra-ui/react";
import { FaVuejs, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";

function App() {
    return (
        <>
        <Center>
            <Box position="relative" top="10vh" paddingTop="10vh"> 
                <Text textStyle="xl" fontWeight="medium" position="relative">Tecnologias</Text>
                <HStack position="relative" paddingTop="1vh">
                    <IconButton title="Vue" size="xl" variant="ghost" rounded="xl" _hover={{ outline: "solid", outlineColor:"green.400" }}>
                        <FaVuejs></FaVuejs>
                    </IconButton>
                    <IconButton title="React" size="xl" variant="ghost" rounded="xl" _hover={{ outline: "solid", outlineColor:"cyan.400" }}>
                        <FaReact></FaReact>
                    </IconButton>
                    <IconButton title="Node" size="xl" variant="ghost" rounded="xl" _hover={{ outline: "solid", outlineColor:"green.400" }}>
                        <FaNodeJs></FaNodeJs>
                    </IconButton>
                    <IconButton title="Javascript" size="xl" variant="ghost" rounded="xl" _hover={{ outline: "solid", outlineColor:"yellow.400" }}>
                        <IoLogoJavascript></IoLogoJavascript>
                    </IconButton> 
                </HStack>
                <HStack position="relative" paddingTop="1vh">
                    <IconButton title="MySQL" size="xl" variant="ghost" rounded="xl" _hover={{ outline: "solid", outlineColor:"blue.400" }}>
                        <SiMysql></SiMysql>
                    </IconButton> 
                    <IconButton title="Typescript" size="xl" variant="ghost" rounded="xl" _hover={{ outline: "solid", outlineColor:"blue.600" }}>
                        <SiTypescript></SiTypescript>
                    </IconButton>
                    <IconButton title="Java" size="xl" variant="ghost" rounded="xl" _hover={{ outline: "solid", outlineColor:"red.400" }}>
                        <FaJava></FaJava>
                    </IconButton>
                    <IconButton title="Python" size="xl" variant="ghost" rounded="xl" _hover={{ outline: "solid", outlineColor:"blue.400" }}>
                        <FaPython></FaPython>
                    </IconButton>
                </HStack>
            </Box>
        </Center>
        </>
    )
}

export default App;