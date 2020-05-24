import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Shop() {

    const [repositories, setRepositories] = useState([])
    console.log(user)

    // consultar api github
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/euiciowr/repos`);
            const data = await response.json();
            setRepositories(data)
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="Shop">
                <ul className="ul">
                    {
                        repositories.map(
                            repo =>
                                <li className="li" key={repo.id}>
                                    <Link to={`/shop/${repo.id}`}> {repo.name} </Link>
                                </li>
                        )
                    }
                </ul>
            </div>
        </>
    );
}

export default Shop;