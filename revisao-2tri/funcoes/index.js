//Declacar função
function imprimeOlá() {
  console.log("olá");
}
function olá(nome) {
  console.log("olá, " + nome);
}

let salario = 1000;

//set interval

setInterval(function () {
  salario = salario + 100;
  console.clear(); //limpar o terminal
  console.log(`salario: ${salario},00`);
}, 2000);


//crie uma função que retorne um objeto js e execute a msm a cada 1 segundo
//execute esta função a cada 1s através de um etInterval()
let capivaraaaa = {
  nome: "capivaraaaa",
  cidade: "paraná",
  mergulhos: 200,
};


setInterval(function (){
  capivara.mergulhos = capivara.capivara.mergulhos + 2;
  console.log(capivaraaaa);
}, 1000);

 //invocar função
imprimeOlá();
oláPessoa("cleiton");
oláPessoa("jobb");
