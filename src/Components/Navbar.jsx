import React, { useState } from 'react';
import {
  Container,
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Input,
  Spacer,
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  MenuDivider,
  useColorModeValue
} from '@chakra-ui/react';


const IconButton = ({ children }) => {
  return (
    <Button
      padding="0.4rem"
      width="auto"
      height="auto"
      borderRadius="100%"
      bg="transparent"
      _hover={{ bg: '#f6f6f6' }}
    >
      {children}
    </Button>
  );
};

const Navbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
  return (


    <>
      <Box w={{base:"0%",md:"100%"}} h={{base:"0%",md:"15%"}}
        border="1px solid green"
        // position={"fixed"}
        display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={{ base: "left", md: "center" }} flexDirection={{ base: "row", md: "row" }}
      >

        <Text fontSize={{ base: "0px", md: "6xl" }} color={"#000000"}>GitHub_Repository_Viewer</Text>
        <Box borderRadius={"50%"} ml={{ base: "0px", md: "10px" }} w={{ base: "60px", md: "80px" }} border={"1.5px solid #039BE5"} h={{ base: "60px", md: "80px" }} >
          <Image w="100%" h="100%" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />

        </Box>

      </Box>
      <Box
        py="2"
        border="0 solid #e5e7eb"
        position="fixed"
        top="0"
        bg={"transparent"}
        // bg="linear-gradient(to top, #FFF9C4, #FF80AB, #2196F3 )"
        width="100%"
        zIndex="1"
      >
        <Container maxW="1280px" px={4} mx="auto">
          <HStack spacing={4}>

            <Input
              variant={"unstyled"}
              type="text" value={query} onChange={handleChange} placeholder="Enter GitHub username"
              maxW={{ base: "15rem", md: "26rem" }}
              borderColor={useColorModeValue('gray.300', 'white')}
              borderRadius="5px"
              d={{ base: 'none', md: 'block' }}
            />
            <Spacer />
            <HStack spacing={3}>
              <Button onClick={handleSubmit} fontSize={{ base: "10px", md: "14px" }} color="#fff" w={{ base: "55px", md: "120px" }} h={{ base: "15px", md: "25px" }} rounded="md" bg="#3b49df" _hover={{ bg: '#323ebe' }}>
                Search User
              </Button>

              <Menu isLazy>
                <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                  <Avatar size="sm" src={'https://avatars2.githubusercontent.com/u/37842853?v=4'} />
                </MenuButton>
                <MenuList
                  zIndex={5}
                  border="2px solid"
                  borderColor={useColorModeValue('gray.700', 'gray.100')}
                  boxShadow="4px 4px 0"
                >
                  <Link href="https://dev.to/m_ahmad" _hover={{ textDecoration: 'none' }} isExternal>
                    <MenuItem>
                      <VStack justifyContent="start" alignItems="left">
                        <Text fontWeight="500">-By harsh sharma</Text>
                        <Text size="sm" color="gray.500" mt="0 !important">
                          Harsh2004R
                        </Text>
                      </VStack>
                    </MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Dashboard</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Create Post</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Reading List</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Settings</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Sign Out</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Container>

      </Box>
    </>

  );
};

export default Navbar;