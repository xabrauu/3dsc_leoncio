import{mostrarDadosVeiculo} from "./veiculo.js";
const carro = mostrarDadosVeiculo("chevrolet", "chevette", "chevrolet");
console.log(carro);
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.fabricante);

import {acelerar} from "./veivulo.js";
const kmh = acelerar(250);
console.log(kmh);

import {fs} from "/resquire.cjs";
console.log(fs)

export function printNome(nome){
  console.log(`Olá, ${nome}!`);
}
