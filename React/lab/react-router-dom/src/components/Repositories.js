import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Repo() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/users/octocat/repos`
      );
      const data = await response.json();
      setRepositories(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="Repo">
        <ul className="ul">
          {repositories.map((repo) => (
            <li className="li" key={repo.id}>
              <Link to={`/shop/${repo.id}`}> {repo.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Repo;
