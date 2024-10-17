//let n = 0

//setTimeout(function() {
// console.log('Executou')
//},5000)

//const intervalo = setInterval(function() {

 // console.clear()
 // console.log(`Contador: ${n}`)
//n++
//}, 1000)


//setTimeout(function() {
//clearInterval(intervalo)
  //redirecinar para outra pagina
 // location.href = "https://www.google.com.br"

//}, 5000) 









/** crie uma função setintrval que receba uma função e um tempo de 3s
 *dentro dela imprima um número randômico de 1 a 10
 *após percorridos 8s  interrompa com setTimeout
 */

const intervalo2 = setInterval(function() {
  let num = Math.round(Math.rondom() * 10) 
  console.log(num)
}, 3000)

setTimeout(function(){
  clearInterval(intervalo2)
  location.href = "https://www.shopee.com.br"
}, 8000)






