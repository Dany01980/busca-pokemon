import { findPokemon, sortPokemons } from './pokemonFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const sortIdButton = document.getElementById('sortIdButton');
    const sortNameButton = document.getElementById('sortNameButton');
    const searchResult = document.getElementById('searchResult');
    const pokemonList = document.getElementById('pokemonList');

    const renderPokemon = (pokemon) => {
        if (pokemon) {
            searchResult.innerHTML = `
        <div class="card mb-4">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${pokemon.name}</h2>
                </div>
                <div class="card-body">
                    <p class="card-text">ID: ${pokemon.id}</p>
                    <p class="card-text">Tipo: ${pokemon.types.join(', ')}</p>
                </div>
            </div>
        </div>
        `;
        } else {
            searchResult.innerHTML = '<p>Pokémon no encontrado</p>';
        }
    };

    const renderPokemonList = (pokemons) => {
        pokemonList.innerHTML = pokemons.map(p => `
        <div class="col-md-4 mb-3">
            <div class="card text-center">
                <div class="card-header">
                    <h4>${p.name}</h4>
                </div>
                <div class="card-body">
                    <p class="card-text">ID: ${p.id}</p>
                    <p class="card-text">Tipo: ${p.types.join(', ')}</p>
                </div>
            </div>
        </div>
    `).join('');
    };

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        searchResult.innerHTML = '<p>Buscando...</p>';
        findPokemon(searchTerm, renderPokemon);
    });

    sortIdButton.addEventListener('click', () => {
        sortPokemons('id', renderPokemonList);
    });

    sortNameButton.addEventListener('click', () => {
        sortPokemons('name', renderPokemonList);
    });

    // Inicializar la lista de Pokémon
    sortPokemons('id', renderPokemonList);
});