import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    // public id: number
    // public name: string

    // constructor(id: number, name: string) {
    //     this.id = id
    //     this.name = name
    // }

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string
    ) {}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')

        return data.moves;
    }
}

export const charmander = new Pokemon(1, 'Charmander')
console.log(charmander.name)
console.log(charmander)
console.log(charmander.imageUrl)
charmander.scream()

console.log(charmander.getMoves())
