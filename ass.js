$( () => {

        const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

        const getPokemon = async (pokemonName) => {
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
                getPokemon(pokemonName);
        });

        $('#pokemonInput').on("keypress", (event) => {
            let searchEnter = $('#pokemonInput').val().toLowerCase();
            if (event.key === "Enter") {
                getPokemon(searchEnter);
            } 
        });

        const displayPokemonData = (data) => {
            let container = $('<div>');
            $('<h2>').text('Name: ' + data.name).appendTo(container);
            $('<img>').attr('src', data.sprites.front_default).attr('alt', data.name).appendTo(container);
            $('<p>').text('Height: ' + data.height).appendTo(container);
            $('<p>').text('Weight: ' + data.weight).appendTo(container);
            $('<p>').text('XP: ' + data.base_experience).appendTo(container);
            $('<p>').text('Type: ' + data.types[0].type.name).appendTo(container);
    
            $('#pokemonData').empty().append(container);
        };

})