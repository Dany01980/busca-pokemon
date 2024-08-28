import { data } from './pokemonData.js';

export const findPokemon = (searchTerm, callback) => {
    setTimeout(() => {
        const pokemon = data.find(p =>
            p.id === parseInt(searchTerm) || p.name.toLowerCase() === searchTerm.toLowerCase()
        );
        callback(pokemon);
    }, 1000);
};

export const sortPokemons = (key, callback) => {
    setTimeout(() => {
        const sortedPokemons = [...data].sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
        callback(sortedPokemons);
    }, 500);
};