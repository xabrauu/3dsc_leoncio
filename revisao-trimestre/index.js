/**
 * função nativa que recebe argumentos
 * controla dados a partir de um intervalo
 */
const intervalo1 = setInterval(function () {
  console.log("olá");
}, 200);
// limpar intervalo
clearInterval(intervalo1);
const timeOut1 = setTimeout(function () {
  console.log("olá");
}, 200);
//limpar intervalo
claerTimeout(timeOut1);
//estrutura de dados
//array -> estrutura de dados indexada
const nomes = ["cleiton", "jão", "lucas"];
nomes[2];
// objetos literais -> estrutura chave/valor
const cachorro = {
  patas: 4,
  cor: "preto",
  raca: "vira-lata",
  castrado: false,
};
console.log(cachorro);
console.log(cachorro.cor);
Object.keys(cachorro);
Object.values(cachorro);
// função
