import React from 'react'
import { Box, HStack, Text, Divider } from '@chakra-ui/react'
import { FiGithub, FiLink, FiEdit, FiMessageCircle } from 'react-icons/fi'


function GithubCard() {
    return (
        <div>

            <Box w="100%" h={{ base: "80vh", md: "60vh" }}
                // border={"3px solid lime"}
                display={"flex"} flexDirection={{ base: "column", md: "row" }} justifyContent={"center"} alignContent={"center"} alignItems={{ base: "center", md: "center" }}
            >

                <Box 
                
                boxShadow="inset 0 0 20px 0px rgba(0, 0, 0, 0.5)"
               
                w={{ base: "95%", md: "40%" }} h="auto" p={4} borderRadius={"xl"}
                    // border={"1px solid #9E9E9E"}
                >
                    <Box
                        // border={"1px solid red"}
                        display={"flex"} justifyContent={"left"} alignContent={"center"} alignItems={{ base: "left", md: "center" }}
                        w="100%">
                        <HStack alignItems={"center"}><FiGithub color='#EC407A' /> <Text fontWeight={"500"} fontSize={{ base: "13px", md: "15px" }}>Repo name</Text></HStack>
                    </Box>

                    <Divider />

                    <Box w="100%" h="auto"
                    //  border={"1px solid yellow"}
                    >
                        <Text textAlign={"justify"} fontWeight={"500"} fontSize={{ base: "11px", md: "13px" }} color={"#00E676"}>Description :
                            <span style={{ color: "#000000" }}> Balaji Gupta, born in Kolkata, could buy 2 houses within a
                                month, Porsche and paid all his debts. But previously, he worked with salary under the
                                minimum wage. So, how could he earn so much money only in a month? He tells us his story.</span>
                        </Text>
                    </Box>
                    <Divider />
                    <Box w="100%" h="auto"
                    // border={"1px solid yellow"}

                    >
                        <Text textAlign={"justify"} fontWeight={"500"} fontSize={{ base: "11px", md: "12px" }} color={"#00E676"}>Main language :
                            <span style={{ color: "#00796B" }}> Java Script</span>
                        </Text>
                        <Text display={"flex"} alignItems={"center"} _hover={{ cursor: "pointer" }} textAlign={"justify"} fontWeight={"500"} fontSize={{ base: "10px", md: "12px" }} color={"#000000"}>Clone here
                            <span style={{ color: "#039BE5", marginLeft: "5px" }}><FiLink /></span> <span style={{ color: "#1565C0", marginLeft: "5px" }}> https://github.com/Harsh2004R/bucket-db.git</span>
                        </Text>
                    </Box>

                </Box>

                <Box  boxShadow="inset 0 0 20px 0px rgba(0, 0, 0, 0.5)" p={2} m={8} borderRadius={"xl"} w={{ base: "80%", md: "22%" }} h={{ base: "400px", md: "400px" }} 
                // border={"1px solid #9E9E9E"}
                >
                    <Box
                        border={"1px solid red"}
                        display={"flex"} flexDirection={"column"} justifyContent={"left"} alignContent={"center"} alignItems={{ base: "left", md: "left" }}
                        w="100%">
                        <HStack alignItems={"center"}><FiEdit color='coral'/><Text fontWeight={"500"} fontSize={{ base: "11px", md: "14px" }}>Created at :{}</Text></HStack>
                        <HStack ml="25px" alignItems={"center"}><Text fontWeight={"500"} fontSize={{ base: "11px", md: "14px" }}>Last update :{}</Text></HStack>
                    </Box>



                </Box>

            </Box>
            <Divider />

        </div>
    )
}

export default GithubCard
