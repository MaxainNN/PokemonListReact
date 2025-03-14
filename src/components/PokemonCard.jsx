import React, {useEffect, useState} from 'react';
import axios from "axios";

function PokemonCard({name, url}) {
    const [pokemonData, setPokemonData] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setPokemonData(response.data);
            } catch (Error) {
                console.log("Error fetching data: " ,Error);
            }
        };
        fetchData();
    }, [url]);
    return (
        <div className="pokemon-card">
            <h3>{name}</h3>
            <button
                className="btn-details"
                onClick={() => setShowDetails(!showDetails)}
            >
                Details
            </button>
            {pokemonData && showDetails && (
                <div className="pokemon-details">
                    <img src={pokemonData.sprites.front_default} alt={name}/>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                    <p>Base experience: {pokemonData.base_experience}</p>
                </div>
            )}
        </div>
    );
}

export default PokemonCard;