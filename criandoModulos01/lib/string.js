const meuNome = "marcos";

function imprimeNome() {
  console.log(`Meu nome é ${meuNome}`);
}
//exportação imediata
export function caixaAlta(nome) {
  return nome.toUpperCase();
}
//exportação imediata
export function caixaBaixa(nome) {
  return nome.toLowerCase();
}
//exportação defaut (padrão)
function separarPorHilfen(nome) {
  return nome.split("").join ('_');
}
//exportação posterior de valores
export { meuNome, imprimeNome };
