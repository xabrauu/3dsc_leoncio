function mostrarDadosveiculo(marca, modelo, fabricante){
return{
  marca: marca,
  modelo: modelo,
  fabricante: fabricante,
};
  
}
export {mostrarDadosveiculo, acelerar}

function acelerar (kmh) {
  return{
    kmh: kmh
  }
}