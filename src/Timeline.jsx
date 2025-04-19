import { Box, Text, VStack, Container } from "@chakra-ui/react";
import { TimelineConnector, TimelineContent, TimelineDescription, TimelineItem, TimelineRoot, TimelineTitle } from "./components/ui/timeline";
import { FaCashRegister, FaProjectDiagram } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

function Timeline() {
    return (
        <Box
            as="section"
            py={{ base: 8, md: 16 }}
        >
            <Container maxW="container.lg">
                <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    mb={{ base: 6, md: 10 }}
                >
                    Trajetória Profissional
                </Text>
                <VStack spacing={4} align="stretch">
                    <TimelineRoot>
                        <TimelineItem>
                            <TimelineConnector>
                                <BiSupport></BiSupport>
                            </TimelineConnector>
                            <TimelineContent>
                                <TimelineTitle>Suporte de Sistema ERP</TimelineTitle>
                                <TimelineDescription>jul de 2022 - o momento</TimelineDescription>
                                <Text textStyle="md" textAlign="justify">
                                    Atendimento, treinamento e suporte a cliente de sistema ERP;
                                    <br />
                                    Instalação e suporte de equipamentos como impressoras e demais equipamentos fiscais;
                                    <br />
                                    Manutenção e correção de erros relacionados a bancos de dados SQL;
                                </Text>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector>
                                <FaProjectDiagram></FaProjectDiagram>
                            </TimelineConnector>
                            <TimelineContent>
                                <TimelineTitle>Estagiário de Engenharia</TimelineTitle>
                                <TimelineDescription>fev de 2021 - dez de 2021</TimelineDescription>
                                <Text textStyle="md" textAlign="justify">
                                    Estagiário na área de engenharia de produtos.
                                </Text>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector>
                                <FaCashRegister></FaCashRegister>
                            </TimelineConnector>
                            <TimelineContent>
                                <TimelineTitle>Atendente</TimelineTitle>
                                <TimelineDescription>out de 2017 - jan de 2021</TimelineDescription>
                                <Text textStyle="md" textAlign="justify">
                                    Atendente na área de alimentos, atuando como repositor e manutenção do software da empresa.
                                </Text>
                            </TimelineContent>
                        </TimelineItem>
                    </TimelineRoot>
                </VStack>
            </Container>
        </Box>
    );
}

export default Timeline;