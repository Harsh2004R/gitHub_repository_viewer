
import React, { useEffect, useState } from 'react';
import { Box, HStack, Text, Divider } from '@chakra-ui/react'
import { FiGithub, FiLink, FiEdit, FiEye, FiPenTool, FiLayers } from 'react-icons/fi'
import { BiGitRepoForked, BiStar, BiBullseye, BiPoll } from 'react-icons/bi';
const RepoList = ({ repos }) => {
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const languagePromises = repos.map(async (repo) => {
        const languageResponse = await fetch(repo.languages_url);
        const languages = await languageResponse.json();
        return { [repo.id]: languages };
      });

      const languagesDataArray = await Promise.all(languagePromises);
      const mergedLanguagesData = Object.assign({}, ...languagesDataArray);
      setLanguageData(mergedLanguagesData);
    };

    fetchData();
  }, [repos]);

  return (


    // commenting all details only i'll use required info --------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    // <ul>
    //   {repos.map((repo) => (
    //     <li key={repo.id}>
    //       <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
    //         {repo.name}
    //       </a>
    //       <p>Description: {repo.description}</p>
    //       <p>Language: {repo.language}</p>
    //       <p>Stars: {repo.stargazers_count}</p>
    //       <p>Forks: {repo.forks_count}</p>
    //       <p>Created at: {repo.created_at}</p>
    //       <p>Last updated: {repo.updated_at}</p>

    //       {/* Additional Information */}
    //       <p>Clone URL: {repo.clone_url}</p>
    //       <p>Default branch: {repo.default_branch}</p>
    //       <p>Open issues: {repo.open_issues}</p>
    //       <p>Watchers: {repo.watchers}</p>
    //       <p>License: {repo.license?.name || 'N/A'}</p>

    //       {/* Languages */}
    //       <p>Languages:</p>
    //       <ul>
    //         {Object.keys(languageData[repo.id] || {}).map((language) => (
    //           <li key={language}>
    //             {language}: {languageData[repo.id][language]} bytes
    //           </li>
    //         ))}
    //       </ul>

    //       {/* Additional API request for commit information */}
    //       {/* Include your CommitInfo component here */}
    //       <CommitInfo repo={repo} />
    //     </li>
    //   ))}
    // </ul>

    <>
      {repos.map((repo) => (
        <Box w="100%" h="auto"
          // h={{ base: "80vh", md: "60vh" }}
          bg="rgba(1,1,1)"
          // border={"3px solid lime"}
          display={"flex"} flexDirection={{ base: "column", md: "row" }} justifyContent={"center"} alignContent={"center"} alignItems={{ base: "center", md: "center" }}
        >

          <Box

            boxShadow="inset 0 0 20px 0px rgba(250, 250, 250,0.5)"

            w={{ base: "95%", md: "40%" }} h="auto" p={4} borderRadius={"xl"}
          // border={"1px solid #9E9E9E"}
          >
            <Box
              // border={"1px solid red"}
              display={"flex"} justifyContent={"left"} alignContent={"center"} alignItems={{ base: "left", md: "center" }}
              w="100%">
              <HStack alignItems={"center"}><FiGithub color='#EC407A' /> <Text fontWeight={"500"} color={"#fff"} fontSize={{ base: "13px", md: "15px" }}>Repo name: {repo.name}</Text></HStack>
            </Box>

            <Divider />

            <Box w="100%" h="auto"
            //  border={"1px solid yellow"}
            >
              <Text textAlign={"justify"} fontWeight={"500"} fontSize={{ base: "11px", md: "13px" }} color={"#00E676"}>Description :
                <span style={{ color: "#eee" }}> {repo.description}</span>
              </Text>
            </Box>
            <Divider />
            <Box w="100%" h="auto"
            // border={"1px solid yellow"}

            >
              <Text textAlign={"justify"} fontWeight={"500"} fontSize={{ base: "11px", md: "12px" }} color={"#00E676"}>Main language :
                <span style={{ color: "#00796B" }}> {repo.language}</span>
              </Text>
              <Text display={"flex"} alignItems={"center"} _hover={{ cursor: "pointer" }} textAlign={"justify"} fontWeight={"500"} fontSize={{ base: "10px", md: "12px" }} color={"#eee"}>Clone here :
                <span style={{ color: "#039BE5", marginLeft: "5px" }}><FiLink /></span> <span style={{ color: "#1565C0", marginLeft: "5px" }}> {repo.clone_url}</span>
              </Text>
            </Box>

          </Box>

          <Box position={"relative"} boxShadow="inset 0 0 20px 0px rgba(250, 250, 250,0.5)" p={2} m={8} borderRadius={"xl"} w={{ base: "80%", md: "22%" }} h={{ base: "400px", md: "auto" }}
          // border={"1px solid #9E9E9E"}
          >

            <Box

              // border={"1px solid red"}
              display={"flex"} flexDirection={"column"} justifyContent={"left"} alignContent={"center"} alignItems={{ base: "left", md: "left" }}
              w="100%">

              <Text textAlign={"center"} fontSize={{ base: "xl", md: "3xl" }} color={"#E91E63"}>Additional Info</Text>
              <HStack mt="10px" alignItems={"center"}><FiPenTool color='#29B6F6' /><Text color={"#eee"} fontWeight={"500"} fontSize={{ base: "11px", md: "14px" }}>Created At :{repo.created_at}</Text></HStack>
              <HStack mt="10px" alignItems={"center"}><FiEdit color='coral' /><Text color={"#eee"} fontWeight={"500"} fontSize={{ base: "11px", md: "14px" }}>Last Update :{repo.updated_at}</Text></HStack>
              <HStack mt="10px" alignItems={"center"}><BiBullseye color='#FF0000' /><Text fontWeight={"500"} fontSize={{ base: "11px", md: "14px" }} color={"#eee"}><CommitInfo repo={repo} /></Text></HStack>
              <HStack mt="10px" alignItems={"center"}><BiPoll color='#18FFFF' /><Text fontWeight={"500"} color={"#eee"} fontSize={{ base: "11px", md: "14px" }}>Open Issues :{repo.open_issues}</Text></HStack>
              <HStack mt="10px" alignItems={"center"}><FiEye color='#4CAF50' /><Text color={"#eee"} fontWeight={"500"} fontSize={{ base: "11px", md: "14px" }}>Watcher's :{repo.watchers}</Text></HStack>
              <HStack mt="10px" alignItems={"center"}><BiGitRepoForked color='#29B6F6' /><Text color={"#eee"} fontWeight={"500"} fontSize={{ base: "11px", md: "14px" }}>Fork's :{repo.forks_count}</Text></HStack>
              <HStack mt="10px" alignItems={"center"}><BiStar color='#AB47BC' /><Text fontWeight={"500"} color={"#eee"} fontSize={{ base: "11px", md: "14px" }}>Star Earned :{repo.stargazers_count}</Text></HStack>
              <HStack mt="10px" alignItems={"center"}><FiLayers color='#aea1ff' /><Text fontWeight={"500"} color={"#eee"} fontSize={{ base: "11px", md: "14px" }}>language's :
                <ul fontSize={{ base: "10px", md: "11px" }}>
                  {Object.keys(languageData[repo.id] || {}).map((language) => (
                    <li style={{ marginTop: "10px" }} key={language}>
                      {language}: {languageData[repo.id][language]} bytes
                    </li>
                  ))}
                </ul>
              </Text></HStack>

            </Box>

            <Box bottom={"0"} m="auto" position="absolute" w="98%" h="10%" >

            </Box>



          </Box>


        </Box>

      ))}
      <Divider />

    </>









  );
};

const CommitInfo = ({ repo }) => {
  const [commitInfo, setCommitInfo] = React.useState(null);

  React.useEffect(() => {
    const fetchCommitInfo = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`
        );
        const data = await response.json();
        setCommitInfo(data);
      } catch (error) {
        console.error('Error fetching commit information:', error.message);
      }
    };

    fetchCommitInfo();
  }, [repo]);

  return (
    <div>
      <p>Total Commits: {commitInfo?.length || 'N/A'}</p>
    </div>
  );
};

export default RepoList;