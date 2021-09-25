// task_1
let baseURL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonFullInfo = async (pokemonName) => {

    try {
        const pokemonURL = `${baseURL}${pokemonName}`;
        const {id, name, stats} = await axios.get(pokemonURL).then(result => result.data);
        return {
            id,
            name,
            stats: stats.reduce((result, pokemon) => {
                result[pokemon.stat.name] = pokemon.base_stat;
                return result;
        }, {})

        }
    } catch {
        console.log (`Pokemon "${pokemonName}" not found!`)
    }
}

getPokemonFullInfo('charmander').then(data => console.log(data));

const showPokemon = async (pokemon) => {

    try {
        const {id, name, stats} = await getPokemonFullInfo(pokemon);

        const divPokemon = document.querySelector('.pokemon');
        const h1Heading = document.createElement('h1');
        const h2Heading = document.createElement('h2');
        const ulPokemonStats = document.createElement('ul');
        h1Heading.innerText = `${name} (${id})`;
        const statsInfo = Object.entries(stats);
        statsInfo.forEach(([stat, value]) => {
            const liStats =document.createElement('li');

            liStats.innerText = `${stat}: ${value}`;
            ulPokemonStats.append(liStats)
        })
        h2Heading.append(ulPokemonStats)
        divPokemon.append(h1Heading, h2Heading)

    } catch (error) {

    }

}

showPokemon('charmander')








