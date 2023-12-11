
import React, { useState } from 'react';
import axios from 'axios';
import RepoList from './Components/RepoList';
import { Box} from '@chakra-ui/react'
import Navbar from './Components/Navbar';

const App = () => {
  const [repos, setRepos] = useState([]);

  // const fetchRepos = async (username, page = 1, perPage = 10) => {
  //   try {
  //     const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
  //       params: {
  //         page,
  //         per_page: perPage,
  //       },
  //     });
  //     setRepos(response.data);
  //   } catch (error) {
  //     console.error('Error fetching repositories:', error.message);
  //     setRepos([]);
  //   }
  // };

  const fetchRepos = async (username, page = 1, perPage = 10) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        params: {
          page,
          per_page: perPage,
        },
        headers: {
          Authorization: `Bearer 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`,
        },
      });
      
      setRepos(response.data);
    } catch (error) {
      console.error('Error fetching repositories:', error.message);
      setRepos([]);
    }
  };

  return (
    <>







      <Navbar onSubmit={fetchRepos} />
      <Box 
        w="100%" h="100vh" bg="linear-gradient(to top, #FFF9C4, #FF80AB, #2196F3 )" display={"flex"} justifyContent={"center"} alignItems={"center"}>
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

          
          <RepoList repos={repos} />




        </Box>
      </Box>

    </>
  );
};

export default App;
