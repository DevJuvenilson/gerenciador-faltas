import fs from "fs/promises";
import { PerguntaModel } from "../models/pergunta-model";

const database: PerguntaModel[] = [] 

export const createDataAlunos = async (perguntas: PerguntaModel) => {
    database.push(perguntas);

    // const filePath = "./src/data/database.json";

    // try {
    //     // Ler o conteúdo do Banco de Dados
    //     const fileContent = await fs.readFile(filePath, "utf-8");
    //     let jsonData = JSON.parse(fileContent);

    //     // Verifica se jsonData é um array
    //     if (Array.isArray(jsonData)) {
    //         // Adiciona a nova pergunta ao array
    //         jsonData.push(perguntas);
    //     } else {
    //         throw new Error("O conteúdo do arquivo JSON não é um array.");
    //     }

    //     // Salvar as mudanças de volta no arquivo
    //     await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf-8");

    //     console.log(`O valor foi adicionado com sucesso ao arquivo: ${filePath}`);

    // } catch (error) {
    //     console.error("Erro ao manipular o arquivo JSON:", error);
    //     throw error;
    // }
}