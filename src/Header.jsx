import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconButton, Flex, Link, Box } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";

function Header() {
    return (
        <Box
            as="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            backdropFilter="blur(10px)"
            bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')}
            boxShadow="sm"
            transition="all 0.3s"
        >
            <Flex
                maxW="container.lg"
                mx="auto"
                py={3}
                px={6}
                justify="flex-end"
                align="center"
            >
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
                            _hover={{
                                bg: "whiteAlpha.200"
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
                            _hover={{
                                bg: "whiteAlpha.200"
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