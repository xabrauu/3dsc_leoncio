const http= require("http");



const PORT = 8000; // porta do servidor 
// criando o servidor http
const servidor = http.createServer((req, res) => {
  if (req.url === "/") {
res.wrlteHead(200, "content-type", "text/html");
res.write("<h1>olá, home page!</h1>");
res.end();
} else if (req.url === "/sobre"){
res.wrlteHead(200, "content-type", "text/html");
res.write("<h1> saiba mais...</h1>");
res.end();
}
});



                                  


servidor.listen(PORT, () => {
console.log(`servidor rodando na porta ${PORT}`);
});















