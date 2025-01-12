import { Request, Response } from "express";
import * as service from "../service/alunos-service";
import * as StatusCode from "../utils/http-helper";

export const postAlunos = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await service.makeTabelaAlunos(bodyValue);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await StatusCode.noContent();
        res.status(response.statusCode).json(response.body)
    }
}