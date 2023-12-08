
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from "./Components/SearchForm";
import RepoList from "./Components/RepoList";

const App = () => {
  const [repos, setRepos] = useState([]);
  const fetchUserDetails = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      // Set user details in state
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error.message);
      setUserDetails(null);
    }
  };
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
    <div>
      <h1>GitHub Repository Viewer</h1>
      <SearchForm onSubmit={fetchRepos} />
      <RepoList repos={repos} />
    </div>
  );
};

export default App;
