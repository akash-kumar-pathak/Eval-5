import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.github.com/search/repositories?q=user:akp07+fork:true&sort=updated&per_page=10&type=Repositories`
      );
      setProjects(result.data.items);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Recent 10 Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <a href={project.html_url}>{project.name}</a>
          <p>Stars: {project.stargazers_count}</p>
          <p>Forks: {project.forks_count}</p>
          <p>Language: {project.language}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
