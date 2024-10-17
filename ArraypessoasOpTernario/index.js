const pessoas = [
  { nome : "marcos", sexo: "m"},
  { nome : "anna", sexo: "f"},
  { nome : "joão", sexo: "m"},
  { nome : "marcela", sexo: "f"},
  { nome : "vitor", sexo: "m"}
]


const meninas = [] //vazio
const meninos = [] //vazio

function filtroPessoas(arrPessoas){
  if ( typeof arrPessoas == "object") { // checa se é um array/objeto
  for(pessoa of arrPessoas) {   // itera sobre cada item de pessoas
  pessoa.sexo == "f" // checa a propriedade "sexo"
? meninas.push(pessoa) // caso "f"
    :meninos.push(pessoa); // caso "m"
    
    }
  } else{
    console.log(arrPessoas); // senão imprime um erro
    
     }
}

filtroPessoas(pessoas); // função para reaproveitamento de código


console.log("____meninas____");
console.log(meninas);
console.log("_____meninos_____");
console.log(meninos);