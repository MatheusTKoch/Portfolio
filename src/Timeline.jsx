import { Center, Text } from "@chakra-ui/react";
import { TimelineConnector, TimelineContent, TimelineDescription, TimelineItem, TimelineRoot, TimelineTitle } from "@/components/ui/timeline";
import { FaCashRegister,FaProjectDiagram } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

function App() {
    return (
        <>
            <Text position="relative" top="20vh" fontSize="xl" fontWeight="medium">Trajetória Profissional</Text>
            <Center position="relative" top="25vh">
                
                <TimelineRoot maxW="400px">
                    <TimelineItem>
                        <TimelineConnector>
                            <BiSupport></BiSupport>
                        </TimelineConnector>
                        <TimelineContent>
                        <TimelineTitle>Suporte de Sistema ERP</TimelineTitle>
                        <TimelineDescription>jul de 2022 - o momento</TimelineDescription>
                        <Text textStyle="md">
                            Atendimento, treinamento e suporte a cliente de sistema ERP;
                            Instalação e suporte de equipamentos como impressoras e demais equipamentos fiscais;
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
                        <Text textStyle="md">
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
                        <Text textStyle="md">
                            Atendente na área de alimentos, atuando como repositor e manutenção do software da empresa.
                        </Text>
                        </TimelineContent>
                    </TimelineItem>
                </TimelineRoot>
            </Center>
        </>
    )
};

export default App;