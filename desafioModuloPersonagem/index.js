// crie um modulo ESM personagem.js

/** crie funções para:
 * imprimir um objeto com (nome, poder, vida))
 * exporte o a funçao (imprimirPersonagem))
 * importe o modulo dentro do seu arquivo
 * index.js
 */

import {imprimirDadosPessoa } from "/modulos/personagem.js";
const personagem = imprimirDadosPessoa("cleiton pitoca", 99, 66);

console.log(personagem);
console.log(personagem.nome);
console.log(personagem.poder);
console.log(personagem.vida);





