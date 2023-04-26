// import { name, age } from './bases/01-types'

// import { pokemonIds } from "./bases/02-objects";
// import { charmander } from "./bases/04-injection";
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <h1>Hola, ${name} (${age})</h1>
//   </div>
// `

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${charmander.name}</h1>
  </div>
`
