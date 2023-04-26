export let name: string | undefined = 'José'

export const age: number = 49

export const isValid: boolean = true;

name = 'Clint'

export const templateString = `
String
Multilínea
con Valores ${name}
Escapado \$
Valor: ${1 + 1}
`

console.log(templateString)
