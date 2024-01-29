$( () => {

        const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

        const getPokemonData = async (pokemonName) => {
            try {
                let response = await fetch(POKEMON_API + pokemonName);
                let pokemon = await response.json();
                displayPokemonData(pokemon);
                //console.log(pokemon);
                return pokemon;
            } catch (error) {
                alert(`Hmmm you probably spelled something wrong!`);
            }
        };

        $('#searchButton').on('click', () => {
            let pokemonName = $('#pokemonInput').val().toLowerCase();

            if (pokemonName !== '') {
                getPokemonData(pokemonName);
            } else {
                alert('Please enter a Pokemon name');
            }
        });

        $('#pokemonInput').on("keypress", (event) => {
            let searchEnter = $('#pokemonInput').val().toLowerCase();
            if (event.key === "Enter") {
                getPokemonData(searchEnter);
            }
        });

        const displayPokemonData = (data) => {
            let container = $('<div>');
            let nameElement = $('<h2>').text('Name: ' + data.name);
            let imageElement = $('<img>').attr('src', data.sprites.front_default).attr('alt', data.name);
            let heightElement = $('<p>').text('Height: ' + data.height);
            let weightElement = $('<p>').text('Weight: ' + data.weight);
            let experienceElement = $('<p>').text('XP: ' + data.base_experience);
            let typeElement = $('<p>').text('Type: ' + data.types[0].type.name);
        
            container.append(nameElement, imageElement, heightElement, weightElement, experienceElement, typeElement);
        
            $('#pokemonData').empty().append(container);
        }
})