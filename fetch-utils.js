export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    // console.log(url + '/fightingType');
    const response = await fetch(url);

    const jsonResponse = await response.json();
    
    return jsonResponse.results;
}

export async function getStarWarsSpecies() {
    let url = 'https://swapi.dev/api/species/';
    const response = await fetch(url);

    const jsonResponse = await response.json();
    
    return jsonResponse.results;
}