import express from "express";
import { AlunoController } from "./controllers/aluno.controller";


const app = express();
app.use(express.json());

const alunoController = new AlunoController();

app.post("/aluno", alunoController.criarAluno); 
app.get("/aluno/:id", alunoController.obterAluno);
app.get("/aluno", alunoController.listarAlunos);
app.delete("/aluno/:id", alunoController.deletarAluno);
app.put("/aluno/:id", alunoController.atualizarAluno);


app.listen(3000, () => {
    console.log("Server is running");
});


