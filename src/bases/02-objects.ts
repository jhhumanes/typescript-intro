export const pokemonIds = [1,20, 34, 56, 54]

pokemonIds.push(24);
pokemonIds.push(+'1');

// export const pokemons = {
//     id: 1,
//     name: 'Balbasaur'
// }

interface Pokemon {
    id: number
    name: string
    age?: number
}

export const balbasaur: Pokemon = {
    id: 1,
    name: 'Balbasaur'
}

export const pokemons: Pokemon[] = []
pokemons.push(balbasaur)
