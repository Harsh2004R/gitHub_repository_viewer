
// import React from 'react';

// const RepoList = ({ repos }) => {
//   return (
//     <ul>
//       {repos.map((repo) => (
//         <li key={repo.id}>
//           <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//             {repo.name}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default RepoList;
const RepoList = ({ repos }) => {
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
        </li>
      ))}
    </ul>
  );
};
export default RepoList;