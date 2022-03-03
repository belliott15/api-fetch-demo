export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    // console.log(url + '/fightingType');
    const response = await fetch(url);

    const json = await response.json();
    
    return json.results;
}