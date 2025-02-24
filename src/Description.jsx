import { HStack, Avatar } from "@chakra-ui/react";
import profile from "./assets/profile.jpeg";

function App() {
    return (
        <>
        <HStack>
            <Avatar.Root size={"2xl"} variant={"outline"}>
                <Avatar.Image src={profile}></Avatar.Image>
            </Avatar.Root>
        </HStack>
        </>
    )
}

export default App;