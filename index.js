// task_1
let baseURL = 'https://pokeapi.co/api/v2/pokemon/';

const getStatsList = (statsList) => {
    return statsList.reduce((result, pokemon) => {
        result[pokemon.stat.name] = pokemon.base_stat;
        return result;
    }, {})
}

const getPokemonFullInfo = async (pokemonName) => {

    try {
        const pokemonURL = `${baseURL}${pokemonName}`;
        const {id, name, stats} = await axios.get(pokemonURL).then(result => result.data);
        return {
            id,
            name,
            stats: getStatsList(stats),
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
        h2Heading.innerText = 'Stats:';
        const statsInfo = Object.entries(stats);
        statsInfo.forEach(([stat, value]) => {
            const liStats = document.createElement('li');
            liStats.innerText = `${stat}: ${value}`;
            ulPokemonStats.append(liStats)
        })

        divPokemon.append(h1Heading, h2Heading, ulPokemonStats)

    } catch (error) {

    }

}

showPokemon('charmander')

// task_2

const numbersArray = [4, -5, 7, 10, 0, -2];

Array.prototype.myMap = function(callbackFunction) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callbackFunction(this[i], i, this))
    }
    return result
}

const getCubeNumbersArray = numbersArray.myMap(function(number) {
    return number**3
})

console.log (getCubeNumbersArray);

// task_3

Array.prototype.myFilter = function(callbackFunction) {
    const numbersArray = [];
    for (let i = 0; i < this.length; i++) {
        const result = callbackFunction(this[i], i, this);
        if (result) {
            numbersArray.push(this[i])
        }
    }
    return numbersArray
}

const getFilteredArray = numbersArray.myFilter(function(number) {
    return number >= 0;
})

console.log(getFilteredArray)








