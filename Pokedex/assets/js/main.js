
function convertPokemonToLi(pokemon) {
    return `
    <ol class="pokemons" ${pokemon.type}>
        <li class="pokemon">
            <span class="namber">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">

            </div>
        </li>
    </ol>
    `
}

    //Pangando a lista no arquivo HTML atravas do document que a referencia
    const pokemonList = document.getElementById('pokemonList')

    //Fizemos a requisição //Resebemos essa requisão
    pokeApi.getPokemons().then((pokemons = []) => {
        //Transformando em uma lista de html
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
        //O join() juntará todos os elementos da list em uma string(Com o separador que colocarmos no parenteses e por defaul é',')
        //const newHtml = newList.join('')
    })
    

