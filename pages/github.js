import React, { useState, useEffect } from "react";
import axios from "axios";

const github = () => {
  const [githubInfo, setGithubInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.github.com/users/akp07`);
      setGithubInfo(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>GitHub Information</h2>
      <img src={githubInfo.avatar_url} alt={githubInfo.login} />
      <p>Username: {githubInfo.login}</p>
      <p>Name: {githubInfo.name}</p>
      <p>Location: {githubInfo.location}</p>
      <p>Followers: {githubInfo.followers}</p>
      <p>Following: {githubInfo.following}</p>
    </div>
  );
};

export default github;
