import { PerguntaModel } from "../models/pergunta-model";
import * as repository from "../repositories/alunos.repository";
import * as StatusCode from "../utils/http-helper"
import fs from "fs/promises";


export const makeTabelaAlunos = async (perguntas: PerguntaModel) => {

    let response = null;

    const filePath = "./src/data/database.json";

    // Ler o conteúdo do Banco de Dados
    const fileContent = await fs.readFile(filePath, "utf-8");
    let jsonData = JSON.parse(fileContent);

    if (Object.keys(perguntas).length !== 0 && perguntas.pergunta_id && perguntas.alunos) {
        await repository.createDataAlunos(perguntas);
        response = await StatusCode.created(`A pergunta enviada foi criada no Banco de Dados com sucesso!`);
    } else {
        response = await StatusCode.badRequest("A requisição foi mal solicitada.");
    }

    return response

}