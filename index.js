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


const divPokemon = document.querySelector('.pokemon');

const h1Heading = document.createElement('h1');
const h2Heading = document.createElement('h2');

divPokemon.append(h1Heading, h2Heading)

h1Heading.innerText = '2ttt31'


console.log (divPokemon)



