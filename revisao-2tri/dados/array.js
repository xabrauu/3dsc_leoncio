//array -> estrutura de dados indexada
//(), [], {}
//são iteraveis ou seja, podem ser percorridos até eu limite
//loops / cliclos de repetição -> for, for in, for of, foreach

//array um tipo de objeto
//p
const pokemonList = ["pikachuu", "charmander", "girratina", "mew"];
//                 0            1            2           3

console.log(pokemonList[3]); // squirtle
 for (let i = 0; i < pokemonList.length; i++) {
 console.log(pokemonList[i]);
 }

for (let pokemon in pokemonList) {
  console.log(pokemonList[pokemon]);
}

 for (let pokemon of pokemonList) {
  console.log(pokemon);
 }
