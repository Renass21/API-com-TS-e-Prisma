import { Response } from "express";

export function serverError(res: Response, error: any) {
    return res.status(500).send({
        ok: false,
        message: error.toString()
    })
}

export function errorNotFound(res: Response, entidade: string) {
    return res.status(404).send({
        ok: false,
        message: `${entidade} não existe.`
    })
}

export function errorBadRequest(res: Response) {
    return res.status(400).send({
        ok: false,
        message: "Informe todos os campos obrigatórios"
    });    

}    