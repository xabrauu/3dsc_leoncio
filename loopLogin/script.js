const login = "brnu"
const senha = "35791"
let l, s = ""
while (l != login || s != senha) {
  l = prompt("digite o login: ")
  s = prompt("digite a senha: ")
  if (l != login || s != senha){
    alert("Login ou senha incorretos")
    break
  }
  window.location.replace("www.alura.com.br")
}