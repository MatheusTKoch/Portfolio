import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconButton, Flex, Link, Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";

function Header() {
    const bgColor = useColorModeValue(
        'rgba(34, 43, 53, 0.9)',
        'rgba(26, 32, 44, 0.9)'    
    );
    const borderColor = useColorModeValue(
        'rgba(34, 43, 53, 0.9)', 
        'rgba(26, 32, 44, 0.3)'    
    );

    return (
        <Box
            as="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            backdropFilter="blur(10px)"
            backgroundColor={bgColor}
            borderBottom="1px solid"
            borderColor={borderColor}
            transition="all 0.3s"
            color="white"
        >
            <Flex
                maxW="container.lg"
                mx="auto"
                py={3}
                px={6}
                justify="space-between"
                align="center"
            >
                <Flex align="center">
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        letterSpacing="wide"
                    >
                        <Text as="span" color="black">
                            Matheus{" "}
                        </Text>
                        <Text as="span" color="white">
                            T. K.
                        </Text>
                    </Text>
                </Flex>

                <Flex gap={4}>
                    <Link 
                        href="https://github.com/MatheusTKoch" 
                        target="_blank"
                        _hover={{ transform: "translateY(-2px)" }}
                        transition="all 0.3s"
                    >
                        <IconButton
                            aria-label="GitHub"
                            variant="ghost"
                            rounded="full"
                            size="lg"
                            color="black"
                            _hover={{
                                bg: "whiteAlpha.200",
                                color: "white"
                            }}
                        >
                            <FaGithub size={24}/>
                        </IconButton>
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/matheus-trilha-koch-712806162/" 
                        target="_blank"
                        _hover={{ transform: "translateY(-2px)" }}
                        transition="all 0.3s"
                    >
                        <IconButton
                            aria-label="LinkedIn"
                            variant="ghost"
                            rounded="full"
                            size="lg"
                            color="black"
                            _hover={{
                                bg: "whiteAlpha.200",
                                color: "white"
                            }}
                        >
                            <FaLinkedin size={24}/>
                        </IconButton>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Header;