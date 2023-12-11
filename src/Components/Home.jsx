import React from 'react'
import RepoList from './RepoList';
import SearchForm from './SearchForm';
import { Box,  Text, Image} from '@chakra-ui/react'

function Home() {
    return (
        <>
        <SearchForm onSubmit={fetchRepos} />
            <Box w="100%" h="100vh" bg="linear-gradient(to top, #FFF9C4, #FF80AB, #2196F3 )" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box borderRadius={"xl"} w={{ base: "98%", md: "90%" }} h="95%" bg="#FFFFFF" overflow="auto"
                    sx={{
                        // scrollbar here...
                        "&::-webkit-scrollbar": {
                            width: "6px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "8px",
                        },
                        "&::-webkit-scrollbar-track": {
                            background: "linear-gradient(to top, #FFFF8D, #FF4500)",
                        },
                    }}
                >
                    {/* my scrollable content goes here */}

                    {/* <--------------------Headre part starting from here -----------------------------------> */}

                    <Box w="100%" h="15%"
                        border="1px solid green"
                        // position={"fixed"}
                        display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={{ base: "left", md: "center" }} flexDirection={{ base: "column", md: "row" }}
                    >
                        <Text fontSize={{ base: "2xl", md: "6xl" }} color={"#000000"}>GitHub_Repository_Viewer</Text>
                        <Box borderRadius={"50%"} ml={{ base: "0px", md: "10px" }} w={{ base: "60px", md: "80px" }} border={"1.5px solid #039BE5"} h={{ base: "60px", md: "80px" }} >
                            <Image w="100%" h="100%" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />

                        </Box>

                    </Box>

                    {/* <--------------------Headre part ends here -----------------------------------> */}


                    <RepoList/>




                </Box>
            </Box>
        </>
    )
}

export default Home
