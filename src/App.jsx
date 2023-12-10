
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from "./Components/SearchForm";
import RepoList from "./Components/RepoList";
import { Box } from '@chakra-ui/react';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { ChakraProvider } from '@chakra-ui/react'

import Home from './Components/Home';
const App = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async (username, page = 1, perPage = 10) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        params: {
          page,
          per_page: perPage,
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
      <div>
        <h1>GitHub Repository Viewer</h1>
        <SearchForm onSubmit={fetchRepos} />
        <RepoList repos={repos} />
      </div>
      
      <ChakraProvider><Home /></ChakraProvider>

    </>
  );
};

export default App;
