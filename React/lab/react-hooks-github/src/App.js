import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  // consultar api github
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.github.com/users/euiciowr/repos"
      );
      const data = await response.json();
      setRepositories(data);
    }
    fetchData();
  }, []);

  // favoritar
  function handleFavorites(id) {
    const repositoriesFavorites = repositories.map((repo) => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    console.log(repositoriesFavorites);
    setRepositories(repositoriesFavorites);
  }

  // contar a quantidade de favoritos e alterar o title
  useEffect(() => {
    const filtered = repositories.filter((repo) => repo.favorite);
    document.title = `Favorites ${filtered.length}`;
  }, [repositories]);

  return (
    <>
      <div className="App">
        <ul className="ul">
          {repositories.map((repo) => (
            <li className="li" key={repo.id}>
              {repo.name}
              <button onClick={() => handleFavorites(repo.id)}>
                Favoritar
              </button>
              {repo.favorite === true && <span>Favorito</span>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
