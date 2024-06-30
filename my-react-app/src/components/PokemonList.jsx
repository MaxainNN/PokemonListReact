import React from 'react';
import useFetchPokemon from "../hooks/useFetchPokemon.js";
import Loader from "./Loader.jsx";
import PokemonCard from "./PokemonCard.jsx";

function PokemonList(props) {
    const {
        data: pokemons,
        loading,
        error,
    } = useFetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=40");

    if (loading && !pokemons.length) {
        return <Loader/>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return <div className="pokemon-list">
        {pokemons.map(pokemon => (
            <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
            />
        ))}
    </div>;
}

export default PokemonList;