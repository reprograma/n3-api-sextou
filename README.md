# n3-api-sextou
API surpresa de sexta-feira pra fechar a Semana 10 com chave de ouro

## Passo a passo pra criar a API:
- README.md
- npm init
- npm install express mongoose
- npm install -D nodemon
- .gitignore com node_modules
- criar server.js rodando o app.js com a porta escolhida
- criar o app.js com o express, exportando o app

## Missão do DOJO: API de catálogo filmes da Netflix
Criar uma API, com banco de dados, pra escolher qual filme deve aparecer no topo da lista de sugestões.  
Pra isso, devemos criar um mecanismo de pontuação pros filmes,  de forma que os filmes que possuírem maior pontuação, vão aparecer antes dos outros.

### REQUISITOS
- Cada filme deve possuir os seguintes campos: nome, ano, avaliações, quantidade de exibições
- Não podemos ter filmes diferentes com o mesmo nome
- Avaliações é uma lista de números, em que cada número representa a avaliação da pessoa de 1 a 5 (estrelas). Exemplo: { avaliacoes: [2,3,1,4,5,5,1,2] }
- A pontuação do filme é calculada multiplicando a média de avaliações com a quantidade de exibições.
- A rota GET /filmes/catalogo deve trazer os filmes ordenados por pontuação, exibindo a pontuação de cada filme.
- A rota POST /filmes/criar deve receber no body um novo filme pra ser adicionado no banco de dados, somente com nome e ano
- A rota PATCH /filmes/exibicao/:id deve salvar a lista completa de avaliações e a quantidade de exibições
- A rota DELETE /filmes/remover/:id deve remover o filme do catálogo pelo id


