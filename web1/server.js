import { createServer } from "node:http";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/greetings":
      response.writeHead(200, { "Content-Type": "text/json" });
      response.end(
        JSON.stringify({
          web01:
            "Opa meu nobre, um salve pra tu aqui por meio do NGINX com Node no WEB1.",
        })
      );

      break;
    default:
      response.writeHead(404, { "Content-Type": "text/json" });
      response.end(JSON.stringify({ message: "Not found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server running on port ${PORT}`));
