//Importando o express e as rotas
import express from "express";
import { lightsRouter } from "./routes/lightsRouter.js";

//Instanciando o express e definindo a porta que o servidor vai esrar rodando
const app = express();
const port = 2000;

//Middlewaee para tranformar respostas e define o caminho principal das rotas
app.use(express.json());
app.use('/api', lightsRouter);

//Função para iniciar o server na porta e exibir a mensagem de sucesso
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
  });