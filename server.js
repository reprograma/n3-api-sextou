const app = require('./src/app')
const port = 3000

app.list(port, () => {
  console.log(`App rodando na porta ${port}`)
})
