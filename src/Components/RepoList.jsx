
// const RepoList = ({ repos }) => {
//   return (
//     <ul>
//       {repos.map((repo) => (
//         <li key={repo.id}>
//           <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//             {repo.name}
//           </a>
//           <p>Description: {repo.description}</p>
//           <p>Language: {repo.language}</p>
//           <p>Stars: {repo.stargazers_count}</p>
//           <p>Forks: {repo.forks_count}</p>
//           <p>Created at: {repo.created_at}</p>
//           <p>Last updated: {repo.updated_at}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default RepoList;




import React, { useEffect, useState } from 'react';

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
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
          <p>Description: {repo.description}</p>
          <p>Language: {repo.language}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Forks: {repo.forks_count}</p>
          <p>Created at: {repo.created_at}</p>
          <p>Last updated: {repo.updated_at}</p>

          {/* Additional Information */}
          <p>Clone URL: {repo.clone_url}</p>
          <p>Default branch: {repo.default_branch}</p>
          <p>Open issues: {repo.open_issues}</p>
          <p>Watchers: {repo.watchers}</p>
          <p>License: {repo.license?.name || 'N/A'}</p>

          {/* Languages */}
          <p>Languages:</p>
          <ul>
            {Object.keys(languageData[repo.id] || {}).map((language) => (
              <li key={language}>
                {language}: {languageData[repo.id][language]} bytes
              </li>
            ))}
          </ul>

          {/* Additional API request for commit information */}
          {/* Include your CommitInfo component here */}
          <CommitInfo repo={repo} />
        </li>
      ))}
    </ul>
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